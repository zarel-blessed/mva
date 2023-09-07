import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_TOKEN}`,
  },
};

const fetchDataFromAPI = async (url: string) => {
  const data = await axios.get(`${BASE_URL}${url}`, options);
  return data.data;
};

export default fetchDataFromAPI;
