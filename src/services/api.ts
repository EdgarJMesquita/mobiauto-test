import axios from "axios";

const baseURL = "https://api.mobiauto.com.br/";

export const api = axios.create({
  baseURL,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
