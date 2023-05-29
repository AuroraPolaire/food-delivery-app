import axios from "axios";

const options = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/filter.php",
  params: { c: "Vegan" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

export const getVegan = async () => {
  const { data } = await axios.request(options);
  return data;
};
