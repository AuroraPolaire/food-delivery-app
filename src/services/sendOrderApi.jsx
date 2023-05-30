import axios from "axios";

axios.defaults.baseURL = "https://646dd1e99c677e23218a73a9.mockapi.io";

export const sendOrder = async ({
  name,
  email,
  phone,
  address,
  total,
  order,
}) => {
  const { data } = await axios.post("/products", {
    name,
    email,
    phone,
    address,
    total,
    order,
  });
  return data;
};
