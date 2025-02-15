import axios from "axios";

const API_KEY = "12345";

const axiosClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getWeather = (latitude, longitude) => {
  try {
    const response = axiosClient.get("", {
      params: { appid: API_KEY, lat: latitude, lon: longitude },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
    }
    throw error;
  }
);

export default axiosClient;
