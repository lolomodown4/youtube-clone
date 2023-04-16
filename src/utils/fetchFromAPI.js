import axios from "axios";

const baseURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: baseURL,
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "55ca827ed6msh4c1063fc39e76cdp144e32jsn04a4dfa4ab42",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromAPI = async (params) => {
  const response = await axios.get(`${baseURL}/${params}`, options);
  return response.data;
};

export default fetchFromAPI;
