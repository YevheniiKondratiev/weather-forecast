import { Component, OnInit } from '@angular/core';
import {ForecastService} from "../../../sdk/services/forecast.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {CURRENT_LOCATION, DEFAULT_LOCATIONS} from "../../../sdk/default.forecast";

@Component({
  selector: 'app-overview-search',
  templateUrl: './overview-search.component.html',
  styleUrls: ['./overview-search.component.scss']
})
export class OverviewSearchComponent implements OnInit {
  public searchControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  private locations: string[] = DEFAULT_LOCATIONS;

  constructor(
      private forecastService: ForecastService
  ) {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filter(value)),
    );
  }

  ngOnInit(): void {
  }

  public onCurrentLocationClicked(): void {
    this.forecastService.updateCurrentLocation(CURRENT_LOCATION);
    this.searchControl.reset();
  }

  public onSubmit(event: any): void {
    this.forecastService.updateCurrentLocation(this.searchControl.value);
    if (!this.searchControl.value.includes(DEFAULT_LOCATIONS)) {
      this.locations.push(this.searchControl.value);
    }
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.locations.filter(option => option.toLowerCase().includes(filterValue));
  }
}
