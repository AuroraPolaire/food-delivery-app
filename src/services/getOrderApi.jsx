import axios from "axios";

axios.defaults.baseURL = "https://646dd1e99c677e23218a73a9.mockapi.io";

export const getOrder = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  console.log(data);
  return data;
};
