import { fetchForecast, fetchWeather } from "./APIservice.js";
import {
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
} from "./render.js";

export const startWidget = async () => {
  const city = "Чебоксары";
  const widget = document.createElement("div");

  widget.classList.add("widget");

  const dataWeather = await fetchWeather(city);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(dataWeather.error);
  }

  const dataForecast = await fetchForecast(city);
  if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    showError(dataForecast.error);
  }

  return widget;
};

//////////////////////////////продолжение примера с .then .catch(APIservice.js)///////////////////////////////////////
// export const startWidget = () => {
//   const widget = document.createElement("div");
//   widget.classList.add("widget");

// const dataWeather = fetchWeather("Чебоксары").then(dataWeather => {
//   if (dataWeather.success) {
//     renderWidgetToday(widget, dataWeather.data);
//     renderWidgetOther(widget, dataWeather.data);
//   } else {
//     showError();
//   }

//   renderWidgetForecast(widget);
// });
//   return widget;
// };
/////////////////////////////////////////////////////////////////////
