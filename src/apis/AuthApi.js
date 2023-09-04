const listApi = {
  login: '/account/login',
  signUp: '/account/sign-up',
  refreshToken: '/account/renew-token',
}

const ENDPOINT = import.meta.env.VITE_API_URL;

const AuthApi = (type, data, callback, error) => {
  const endpoint = ENDPOINT;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'include',
  };

  fetch(`${endpoint}${listApi[type]}`, options).then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  }).then((data) => {
    callback(data);
  }).catch((er) => {
    error(er);
  });
}

export default AuthApi;