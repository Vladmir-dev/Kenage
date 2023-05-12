import axios from "axios";

export const kenageApi = axios.create({
  baseURL: "​https://kenagecollapi.onrender.com​/api/auth",
});

export const kenageApiConfig = (getState) => {
  const token = getState().auth.token;
  console.log(token);
  const Config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    Config.headers["Authorization"] = `Bearer ${token}`;
  }

  return Config;
};
