import {NgModule} from "@angular/core";
import {TabGroupDetailsComponent} from "./tab-group-details.component";
import {TodayCardComponent} from "./today-card/today-card.component";
import {DailyCarouselComponent} from "./daily-carousel/daily-carousel.component";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {CarouselModule} from "ngx-owl-carousel-o";
import { WeatherImageComponent } from './weather-image/weather-image.component';
import {DegreePipe} from "../../sdk/degree.pipe";

@NgModule({
    declarations: [
        TabGroupDetailsComponent,
        TodayCardComponent,
        DailyCarouselComponent,
        WeatherImageComponent,
        DegreePipe
    ],
    providers: [],
    imports: [
        CarouselModule,
        CommonModule,
        MatTabsModule,
        MatCardModule,
        MatDividerModule,
    ],
    exports: [
        TabGroupDetailsComponent
    ]
})
export class TabGroupDetailsModule { }
