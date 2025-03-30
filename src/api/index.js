import axios from "axios";

const API_KEY = "e6c1495d36a07b069052880c82a24ce1";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    return null; //is city not found return null
  }
};
