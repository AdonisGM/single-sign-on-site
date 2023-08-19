import Cookie from "js-cookie";

const GatewayApi = async (bodyObject = null) => {
  const endpoint = 'http://localhost:3000/account';

  // add no-cors
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObject),
  };

  let response = await fetch(`${endpoint}/gateway`, options);

  if (response.status === 401) {
    const dataRefresh = await refreshToken();
    if (dataRefresh) {
      Cookie.set('token', dataRefresh.data.access_token);
      Cookie.set('refreshToken', dataRefresh.data.refresh_token);
    }
    let optionsR = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObject),
    };
    response = await fetch(`${endpoint}`, optionsR);
  }

  if (response.status >= 500) {
    return Promise.reject(undefined);
  }

  if (!response.ok) {
    const errorData = await response.json();
    return Promise.reject(errorData);
  }

  const data = await response.json();
  return Promise.resolve(data);
};

const refreshToken = async () => {
  const endpoint = 'http://localhost:3000/account/auth';

  if (!localStorage.getItem('refresh_token')) {
    Cookie.remove('token');
    Cookie.remove('refreshToken');
    window.location.href = '/';
    return null;
  }

  const optionsRefresh = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: Cookie.get('refreshToken'),
    }),
    method: 'POST',
  };

  const responseRefresh = await fetch(
    `${endpoint}/renew-token`,
    optionsRefresh
  );

  if (!responseRefresh.ok) {
    Cookie.remove('token');
    Cookie.remove('refreshToken');
    window.location.href = '/';
    return null;
  }

  if (responseRefresh.status === 204) {
    return null;
  }

  return await responseRefresh.json();
};

export default GatewayApi;