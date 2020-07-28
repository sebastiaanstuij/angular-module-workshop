import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { CoreModule } from './core/core.module';
import { CountryDataService } from './core/country-data.service';
import { SummaryDataService } from './core/summary-data.service';
import { MapDataService } from './core/map-data.service';
import { LoggerService } from './core/logger.service';
import { CountryViewModule } from './country-view/country-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    OverviewModule,
    CountryViewModule
  ],
  providers: [
    CountryDataService, SummaryDataService, MapDataService, LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
