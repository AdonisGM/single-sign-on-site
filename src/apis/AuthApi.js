import ErrorToast from "../components/layout/ErrorToast.jsx";

const listApi = {
  login: '/account/login',
  signUp: '/account/sign-up',
  logout: '/account/logout',
  refreshToken: '/account/renew-token',
}

import toast from "react-hot-toast";
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
    if (data.error_message) {
      showToastError(data.error_message)
      throw ErrorToast(data.error_message)
    } else {
      callback(data);
    }
  }).catch((er) => {
    error(er);
  });
}

const showToastError = (errorMessage) => {
  if (!errorMessage.includes(']:::[')) {
    toast.error(errorMessage);
  } else {
    const arrError = errorMessage.split(':::');
    const errorObj = {
      code: arrError[0].substring(1, arrError[0].length - 1),
      message: arrError[2].substring(1, arrError[2].length - 1)
    }
    toast.error(ErrorToast(errorObj));
  }
}

export default AuthApi;