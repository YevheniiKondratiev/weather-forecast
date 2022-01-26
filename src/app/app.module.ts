import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ForecastOverviewModule} from "./forecast-overview/forecast-overview.module";
import {TabGroupDetailsModule} from "./forecast-details/tab-group-details.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {ForecastService} from "../sdk/services/forecast.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DegreePipe} from "../sdk/degree.pipe";
import {ErrorIntercept} from "../sdk/services/error.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ForecastOverviewModule,
        TabGroupDetailsModule,
        RouterModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorIntercept,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
