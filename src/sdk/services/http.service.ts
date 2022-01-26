import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CURRENT_WEATHER_URL, FORECAST_DAILY_URL, FORECAST_ONE_CALL_URL, IP_URL} from "../urls";
import {catchError, Observable, throwError} from "rxjs";
import {AllForecast, ConfigIP, DailyForecast, TodayWeather} from "../types";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API_KEY: string = '6b5a70d801d8aa6222ff9a1997968f68';

  constructor(private httpClient: HttpClient) { }

  public getIP(): Observable<ConfigIP> {
    return this.httpClient.get<ConfigIP>(IP_URL);
  }

  public getAllForecast(lat: number, lon: number, exclude: string, units: string): Observable<AllForecast> {
    return this.httpClient.get<AllForecast>(FORECAST_ONE_CALL_URL, {
      params: {
        lat,
        lon,
        exclude,
        units,
        APPID: this.API_KEY
      }
    });
  }

  public getDailyForecast(cityName: string, cnt: number, units: string): Observable<DailyForecast> {
    return this.httpClient.get<DailyForecast>(FORECAST_DAILY_URL, {
      params: {
        q: cityName,
        cnt,
        units,
        APPID: this.API_KEY
      }
    });
  }

  public getCurrentWeather(cityName: string, units: string): Observable<TodayWeather> {
    return this.httpClient.get<TodayWeather>(CURRENT_WEATHER_URL, {
      params: {
        q: cityName,
        units,
        APPID: this.API_KEY
      }
    });
  }
}
