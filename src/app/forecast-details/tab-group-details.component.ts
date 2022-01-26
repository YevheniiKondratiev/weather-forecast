import { Component, OnInit } from '@angular/core';
import {TabTemplate} from "../../sdk/types";
import {FORECAST_TAB_GROUP} from "../../sdk/default.forecast";

@Component({
  selector: 'app-tab-group-details',
  templateUrl: './tab-group-details.component.html',
  styleUrls: ['./tab-group-details.component.scss']
})
export class TabGroupDetailsComponent implements OnInit {

  public tabHeaders: TabTemplate[] = FORECAST_TAB_GROUP;

  constructor() { }

  ngOnInit(): void {
  }

}
