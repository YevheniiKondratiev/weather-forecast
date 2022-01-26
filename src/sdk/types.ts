export interface TabTemplate {
    id: number,
    text: string,
    alert?: boolean
}

export interface ForecastTodayConfig {
    id: number,
    name: string,
    value: string
}

export interface ForecastDailyConfig {
    degree: number,
    weather: string,
    date: Date | string,
}

export interface ConfigIP {
    query: string,
    status: string,
    country: string,
    countryCode: string,
    region: string,
    regionName: string,
    city: string,
    zip: string,
    lat: number,
    lon: number,
    timezone: string,
    isp: string,
    org: string,
    as: string
}

export interface TodayWeather {
    weather: Weather[],
    clouds: { all: number },
    main: WeatherNumbers,
    visibility: number,
    wind: Wind,
}

export interface Weather {
    id: number,
    main: string,
    description: string,
}

export interface WeatherNumbers {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface Wind {
    speed: number,
    deg: number
}

export interface DailyForecast {
    list: WeatherForecast[]
}

export interface AllForecast {
    lat: number,
    lon: number,
    daily?: WeatherForecast[],
    minutely?: WeatherForecast[],
    hourly?: WeatherForecast[],
    current?: WeatherForecast[]
}

export interface WeatherForecast {
    temp: Temperature,
    feels_like: Temperature,
    pressure: number,
    humidity: number,
    weather: Weather[],
    speed: number,
    deg: number,
    gust: number,
    clouds: number,
    pop: number,
    dt?: number
}

export interface Temperature {
    day: number,
    night: number,
    eve: number,
    morn: number
    min?: number,
    max?: number
}
