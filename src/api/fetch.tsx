
import options from "../api/authorization";


export const fetchData = async (url : string) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};