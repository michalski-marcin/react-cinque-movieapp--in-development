
import getMethod from "./getMethod";


export const fetchData = async (url : string) => {
  try {
    const response = await fetch(url, getMethod);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};