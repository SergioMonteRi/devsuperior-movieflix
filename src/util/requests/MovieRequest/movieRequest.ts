import axios from "axios";

import { getAuthData } from "util/storage/storage";

import { BASE_URL } from "../requests";
import { Params } from "../requests.types";

export const getMovieReviews = (movieId: string) => {
  const headers = {
    Authorization: "Bearer" + getAuthData().access_token,
  };

  const requestUrl = `/movies/${movieId}/reviews`;

  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: requestUrl,
    headers,
  });
};

export const getAllMovies = (params: Params) => {
  const headers = {
    Authorization: "Bearer" + getAuthData().access_token,
  };

  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: "/movies",
    headers,
    params,
  });
};

export const getMovieById = (movieId: string) => {
  const headers = {
    Authorization: "Bearer" + getAuthData().access_token,
  };

  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: `/movies/${movieId}`,
    headers,
  });
};
