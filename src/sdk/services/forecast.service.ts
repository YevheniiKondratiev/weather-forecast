import { Injectable } from '@angular/core';
import {filter, Observable, Subject} from "rxjs";
import {ConfigIP, TodayWeather, ForecastDailyConfig} from "../types";
import {HttpService} from "./http.service";
import {CURRENT_LOCATION, DEFAULT_FORECAST_DAILY_STORE} from "../default.forecast";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private currentWeather$: Subject<TodayWeather>
      = new Subject<TodayWeather>();

  private dailyForecast$: Subject<ForecastDailyConfig[]>
      = new Subject<ForecastDailyConfig[]>();

  private currentLocation$: Subject<string>
      = new Subject<string>();

  constructor(
      private httpService: HttpService
  ) {
    this.updateCurrentLocation(CURRENT_LOCATION);
  }

  public getCurrentWeather(): Observable<TodayWeather> {
    return this.currentWeather$.asObservable();
  }

  public getDailyForecast(): Observable<ForecastDailyConfig[]> {
    return this.dailyForecast$.asObservable();
  }

  public getCurrentLocation(): Observable<string> {
    return this.currentLocation$.asObservable();
  }

  public updateCurrentLocation(location: string, isPremiumKey: boolean = false): void {
    if (!location) {
      return;
    }

    if (location === CURRENT_LOCATION) {
      this.httpService.getIP()
          .pipe(
              filter(data => !!data)
          )
          .subscribe((response: ConfigIP) => {
            this.updateTodayWeather(response.city, 'metric');
            this.updateAllForecast(response.lat, response.lon,  'hourly,minutely,current', 'metric');
            this.currentLocation$.next(response.city + ', ' + response.country);
          })
    } else {
      const cityName = location.split(',')[0];

      this.updateTodayWeather(cityName, 'metric');
      this.currentLocation$.next(location);
      if (isPremiumKey) {
        this.updateDailyForecast(cityName, 7, 'metric');
      }
    }
  }

  private updateDailyForecast(cityName: string, countDays: number, units: string): void {
    this.httpService.getDailyForecast(cityName, countDays, units)
        .pipe(filter(data => !!data))
        .subscribe(forecastResponse => {
          this.dailyForecast$.next(DEFAULT_FORECAST_DAILY_STORE);
        });
  }

  private updateAllForecast(lat: number, lon: number, exclude: string, units: string) {
    this.httpService.getAllForecast(lat, lon, exclude, units)
        .pipe(filter(data => !!data))
        .subscribe((forecastResponse) => {
          if (forecastResponse?.daily) {
            let counter = 1;
            const forecastDailyConfig = forecastResponse.daily.map((forecast) => {
              const todayDate = new Date();
              const newDate = todayDate.setDate(todayDate.getDate() + counter).toString();
              counter += 1;
              return {
                degree: forecast.temp.day,
                weather: forecast.weather[0].main,
                date: newDate
              }
            });
            this.dailyForecast$.next(forecastDailyConfig);
          }
        });
  }

  private updateTodayWeather(cityName: string, units: string): void {
    this.httpService.getCurrentWeather(cityName, units)
        .pipe(filter(data => !!data))
        .subscribe(weatherResponse => {
          this.currentWeather$.next(weatherResponse);
        });
  }
}
