import axios from "axios";

import { getAuthData } from "util/storage/storage";

import { BASE_URL } from "../requests";

type SaveReviewData = {
  text: string;
  movieId: number;
};

export const saveReviewBackend = (saveReviewData: SaveReviewData) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + getAuthData().access_token,
  };

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/reviews",
    data: saveReviewData,
    headers,
  });
};
