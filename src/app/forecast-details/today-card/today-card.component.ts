import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, filter, Observable, takeUntil} from "rxjs";
import {ForecastTodayConfig, TodayWeather} from "../../../sdk/types";
import {DEFAULT_FORECAST_TODAY_DETAILS} from "../../../sdk/default.forecast";
import {ForecastService} from "../../../sdk/services/forecast.service";
import {BaseComponent} from "../../../sdk/base-component/base.component";
import {ForecastHelper} from "../../../sdk/forecast.helper";

@Component({
  selector: 'app-today-card',
  templateUrl: './today-card.component.html',
  styleUrls: ['./today-card.component.scss']
})
export class TodayCardComponent extends BaseComponent implements OnInit {

  public todayDegree: number = 32;
  public todayWeather$: BehaviorSubject<string> = new BehaviorSubject<string>('Sunny');

  public todayDate: Date = new Date();
  public detailsConfig: ForecastTodayConfig[] = DEFAULT_FORECAST_TODAY_DETAILS;

  constructor(
      private forecastService: ForecastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.forecastService.getCurrentWeather()
        .pipe(
            distinctUntilChanged(),
            filter(data => !!data),
            takeUntil(this.dispose$)
        ).subscribe((todayForecast) => {
          this.todayDegree = todayForecast.main.temp;
          this.todayWeather$.next(todayForecast.weather[0].main);
          this.detailsConfig = ForecastHelper.toWeatherDetails(todayForecast);
    });
  }

}
