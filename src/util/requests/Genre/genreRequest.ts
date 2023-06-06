import axios from "axios";
import { BASE_URL } from "../requests";
import { getAuthData } from "util/storage/storage";

export const requestAllGenres = () => {
  const headers = {
    Authorization: "Bearer" + getAuthData().access_token,
  };

  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: "/genres",
    headers,
  });
};