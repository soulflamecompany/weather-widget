const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "ee62dfcee977b631a29c418a0bfacccb";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}weather?units-metric&q=${city}&appid=${API_KEY}&lang=ru`
    );
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`
    );
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

/////////////////////// пример с .then .catch ///////////////////////
// export const fetchWeather2 = (city) => {
//   return fetch(
//     `${API_URL}weather?units-metric&q=${city}&appid=${API_KEY}&lang=ru`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       success: true, data;
//     })
//     .catch((err) => ({ success: false, err }));
// };
/////////////////////////////////////////////////////////////////////
