import {ForecastDailyConfig, ForecastTodayConfig, TabTemplate} from "./types";

export const FORECAST_TAB_GROUP: TabTemplate[] = [
    {
        id: 0,
        text: 'Weather'
    },
    {
        id: 1,
        text: 'Alerts',
        alert: true
    },
    {
        id: 2,
        text: 'Map'
    },
    {
        id: 3,
        text: 'Satellite'
    },
    {
        id: 4,
        text: 'News'
    }
];

export const DEFAULT_FORECAST_TODAY_DETAILS: ForecastTodayConfig[] = [
    {
        id: 0,
        name: 'RealFeel',
        value: '37°'
    },
    {
        id: 1,
        name: 'Humidity:',
        value: '66%'
    },
    {
        id: 2,
        name: 'Pressure:',
        value: '1000 Pa'
    },
    {
        id: 3,
        name: 'Cloud Cover:',
        value: '45%'
    },
    {
        id: 4,
        name: 'Visibility:',
        value: '5km'
    },
    {
        id: 5,
        name: 'Wind speed:',
        value: '2 m/s'
    }
];

export const DEFAULT_FORECAST_DAILY_STORE: ForecastDailyConfig[] = [
    {
        degree: 28,
        weather: 'Rain',
        date: 'Tue 28, July \'20',
    },
    {
        degree: 30,
        weather: 'Storm',
        date: 'Wed 29, July \'20',
    },
    {
        degree: 32,
        weather: 'Sunny',
        date: 'Thu 30, July \'20',
    },
    {
        degree: 25,
        weather: 'Rain',
        date: 'Fri 31, July \'20',
    },
    {
        degree: 28,
        weather: 'Rain',
        date: 'Sat 1, August \'20',
    },
    {
        degree: 28,
        weather: 'Rain',
        date: 'Sun 2, August \'20',
    },
]

export const BUTTON_NAVIGATION: string = '<img src=\'../../../assets/next.png\' alt=\'Next button\'>'

export const DEFAULT_LOCATIONS: string[] = [
    'Odessa, Ukraine',
    'Kyiv, Ukraine',
    'Kharkiv, Ukraine',
    'London, United Kingdom',
    'Washington, USA',
    'New York, USA',
    'Warsaw, Poland',
    'Berlin, Germany',
    'Paris, France',
    'Rome, Italy',
    'Lisbon, Portugal',
    'Vien, Austria',
    'Prague, Czech'
];

export const CURRENT_LOCATION = 'current';
