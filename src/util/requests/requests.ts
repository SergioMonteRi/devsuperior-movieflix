import qs from "qs";

import axios from "axios";

import { LoginData } from "./requests.types";

import history from "util/history/history";

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  "https://movieflix-devsuperior.herokuapp.com";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "myclientsecret";

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

axios.interceptors.response.use(
  function (response) {
    console.log('sucess', response);
    return response;
  },
  function (error) {
    console.log('error', error);
    if (error.response.status === 401) {
      history.push('/');
    }
    return Promise.reject(error);
  }
);
