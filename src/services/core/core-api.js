import axios from "axios";
import { parse, stringfy } from "qs";
import { onResponseSuccess, onResponseError } from "./interceptors";

const api = axios.create({
  baseURL: "https://661e92ea98427bbbef0503c3.mockapi.io/api",
  paramsSerializer: {
    encode: parse,
    serialize: stringfy,
  },
});

api.interceptors.response.use(onResponseSuccess, onResponseError);

api.defaults.headers.common.Accept = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common.credentials = "include";

export default api;
