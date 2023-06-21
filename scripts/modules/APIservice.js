const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "ee62dfcee977b631a29c418a0bfacccb";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`
    );
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const data = await response.json();
    return { success: true, data };
  } catch {
    return { success: false, err };
  }
};
