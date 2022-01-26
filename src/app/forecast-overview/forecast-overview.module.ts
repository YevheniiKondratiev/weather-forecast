import {NgModule} from "@angular/core";
import {ForecastOverviewComponent} from "./forecast-overview.component";
import {OverviewHeaderComponent} from "./overview-header/overview-header.component";
import {OverviewSearchComponent} from "./overview-search/overview-search.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        ForecastOverviewComponent,
        OverviewHeaderComponent,
        OverviewSearchComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatOptionModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [
        ForecastOverviewComponent
    ],
    providers: []
})
export class ForecastOverviewModule { }
