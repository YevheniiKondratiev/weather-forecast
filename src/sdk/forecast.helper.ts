import {ForecastTodayConfig, TodayWeather} from "./types";
import {DEFAULT_FORECAST_TODAY_DETAILS} from "./default.forecast";
import {DegreePipe} from "./degree.pipe";

export namespace ForecastHelper {
    export function toWeatherDetails(todayWeather: TodayWeather): ForecastTodayConfig[] {
        const degreePipe = new DegreePipe();
        return [
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[0],
                value: degreePipe.transform(todayWeather.main.feels_like)
            },
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[1],
                value: todayWeather.main.humidity.toString() + '%'
            },
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[2],
                value: todayWeather.main.pressure.toString() + ' Pa'
            },
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[3],
                value: todayWeather.clouds.all.toString() + '%'
            },
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[4],
                value: todayWeather.visibility.toString() + ' m'
            },
            {
                ...DEFAULT_FORECAST_TODAY_DETAILS[5],
                value: todayWeather.wind.speed.toString() + ' m/s'
            }
        ]
    }
}
