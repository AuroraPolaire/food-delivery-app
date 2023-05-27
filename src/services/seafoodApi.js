import axios from "axios";

// axios.defaults.baseURL = "https://646dd1e99c677e23218a73a9.mockapi.io";

const options = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/filter.php",
  params: { c: "Seafood" },
  headers: {
    "X-RapidAPI-Key": "58b7946497msh98e1a21733f1db5p1c2442jsnf3843f2dd6c8",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

export const getSeafood = async () => {
  const { data } = await axios.request(options);
  return data;
};
