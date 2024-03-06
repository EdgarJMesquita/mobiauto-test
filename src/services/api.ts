import axios from "axios";

const baseURL = "https://parallelum.com.br/fipe/api/v1/";

export const api = axios.create({
  baseURL,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
