import axios from "axios";

const apiID = "8eb63c77";
const apiKey = "92d936e116f399d3fa96aaa44d13ac00";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${apiID}&app_key=${apiKey}`;
  return await axios.get(url);
};
