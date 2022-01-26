import { Component, OnInit } from '@angular/core';
import {ForecastService} from "../../../sdk/services/forecast.service";
import {BehaviorSubject, filter, takeUntil} from "rxjs";
import {ConfigIP} from "../../../sdk/types";
import {BaseComponent} from "../../../sdk/base-component/base.component";

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.scss']
})
export class OverviewHeaderComponent extends BaseComponent implements OnInit {

  public currentLocation: BehaviorSubject<string> = new BehaviorSubject<string>('Chinnai, Tamil Nadu')

  constructor(
      private forecastService: ForecastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.forecastService.getCurrentLocation()
        .pipe(
            filter(data => !!data),
            takeUntil(this.dispose$)
        ).subscribe((location) => {
          this.currentLocation.next(location);
        });
  }

}
