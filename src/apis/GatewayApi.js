import Cookie from "js-cookie";

// const ENDPOINT = 'http://localhost:5000';
const ENDPOINT = 'https://api.nmtung.dev';

const GatewayApi = async (cmd, dataObj) => {
  // add no-cors
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cmd: cmd,
      data: dataObj,
    }),
    credentials: 'include',
  };

  let response = await fetch(`${ENDPOINT}/gateway`, options);

  if (response.status === 401) {
    await refreshToken();
    let optionsR = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: cmd,
        data: dataObj,
      }),
      credentials: 'include',
    };
    response = await fetch(`${ENDPOINT}/gateway`, optionsR);
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
  if (!Cookie.get('refresh_token')) {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');
    window.location.href = '/';
    return null;
  }

  const optionsRefresh = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: Cookie.get('refresh_token'),
    }),
    method: 'POST',
    credentials: 'include',
  };

  const responseRefresh = await fetch(
    `${ENDPOINT}/account/refresh-token`,
    optionsRefresh
  );

  if (!responseRefresh.ok) {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');
    window.location.href = '/';
    return null;
  }

  if (responseRefresh.status === 204) {
    return null;
  }

  return await responseRefresh.json();
};

export default GatewayApi;