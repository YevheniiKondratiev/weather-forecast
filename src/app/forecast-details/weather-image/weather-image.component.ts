import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss']
})
export class WeatherImageComponent implements OnInit {

  @Input()
  public weatherName: string | null = '';

  constructor() { }

  ngOnInit(): void {
  }

}
