/* eslint-disable no-param-reassign */
import axios from "axios";
import localforage from "localforage";

const request = axios.create({
  baseURL: "https://d1-ibet.alex-hram.workers.dev",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
    'content-type': 'application/json',
  },
  timeout: 50000,
  withCredentials: false,
});


export async function errorHandler(error) {
  if (error.response) {
    console.log(error.response);
    if (error.response.status === 401 || error.response.status === 403) {
      console.log("errorHandler", error.response.status);
      await localforage.clear();
      window.location.href = "/";
    } else if (error.response.status === 403) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  }
  if (error?.request) {
    throw new Error(error.request);
  }
  return Promise.reject(error);
}

request.interceptors.request.use(async (config) => {
  const currentTimestamp = parseInt(Date.now() / 1000) + 5;
  const token = await localforage.getItem("authToken");

  const tokenData = parseJWT(token);

  if (token) {
    if (currentTimestamp < tokenData.exp) {
      config.headers["Auth-Token-Mar"] = token;
      config.headers["accept"] = "application/json";
    } else {
      const refreshToken = await localforage.getItem("refreshToken");
      const refreshTokenData = parseJWT(refreshToken);
      if (refreshTokenData && currentTimestamp < refreshTokenData.exp) {
        const newAuthToken = await RefreshToken(refreshToken);
        config.headers["Auth-Token-Mar"] = newAuthToken;
      }
    }
  }

  return config;
}, errorHandler);

request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default request;

function parseJWT(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

async function RefreshToken(refreshToken) {
  try {
    const requestUrl = process.env.NEXT_PUBLIC_API_ENDPOINT + "/refresh-token";
    const headers = {
      "Refresh-Token": refreshToken,
      "Access-Control-Allow-Headers": "X-Requested-With"
    };
    const response = await axios.get(requestUrl, { headers });
    if (response.data.ok) {
      await localforage.setItem("authToken", response?.data?.authToken);
      await localforage.setItem("refreshToken", response?.data?.refreshToken);
      return response?.data?.authToken;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Refresh token Error");
    console.log(error);
  }
  return false;
}
