import axios from "axios";

const instance = axios.create({
  //   baseURL: process.env.API_URL,
  headers: { Accept: "application/json" },
});

instance.interceptors.request.use(
  (res) => {
    res.headers.Authorization = `Bearer ${axios.defaults.headers.common["Authorization"]}`;
    return res;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err?.config?.url, err?.response?.data?.message);
    return Promise.reject(err);
  }
);

export default instance;
