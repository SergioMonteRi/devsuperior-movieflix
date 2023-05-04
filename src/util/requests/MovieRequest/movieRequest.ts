import axios from "axios";

import { getAuthData } from "util/storage/storage";

import { BASE_URL } from "../requests";

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
