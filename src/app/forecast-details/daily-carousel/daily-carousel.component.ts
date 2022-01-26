import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {BUTTON_NAVIGATION} from "../../../sdk/default.forecast";
import {ForecastDailyConfig, WeatherForecast} from "../../../sdk/types";
import {distinctUntilChanged, map, mapTo, Observable, switchMap, takeUntil} from "rxjs";
import {ForecastService} from "../../../sdk/services/forecast.service";
import {BaseComponent} from "../../../sdk/base-component/base.component";

@Component({
  selector: 'app-daily-carousel',
  templateUrl: './daily-carousel.component.html',
  styleUrls: ['./daily-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyCarouselComponent extends BaseComponent implements OnInit, AfterViewChecked {

  public dailyCarouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [BUTTON_NAVIGATION, BUTTON_NAVIGATION],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    autoHeight: true,
    stagePadding: 20,
    nav: true,
    items: 3
  };

  public controlStates = {
    isLeftFader: false,
    isRightFader: false,
  };

  public forecastDailyItems: Observable<ForecastDailyConfig[]> = new Observable<ForecastDailyConfig[]>();

  constructor(
      private cdr: ChangeDetectorRef,
      private forecastService: ForecastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.forecastDailyItems =
        this.forecastService.getDailyForecast()
            .pipe(
                distinctUntilChanged(),
                takeUntil(this.dispose$),
            );
  }

  ngAfterViewChecked() {
    const elementOuter = document.getElementsByClassName('owl-stage-outer');
    if (elementOuter?.item(0)) {
      // @ts-ignore
      this.controlStates.isRightFader = (elementOuter?.item(0)?.scrollWidth - elementOuter?.item(0)?.clientWidth) > 10;
      this.cdr.detectChanges();
    }
  }
}
