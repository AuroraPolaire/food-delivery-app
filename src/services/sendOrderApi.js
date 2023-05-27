import axios from "axios";

axios.defaults.baseURL = "https://646dd1e99c677e23218a73a9.mockapi.io/products";

export const sendOrder = async ({ userData }) => {
  const { data } = await axios.post(userData);
  return data;
};
