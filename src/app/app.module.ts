import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { CoreModule } from './core/core.module';

import { SummaryDataService } from './core/summary-data.service';
import { CountryDataService } from './core/country-data.service';
import { LoggerService } from './core/logger.service';
import { MapDataService } from './core/map-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    OverviewModule 
  ],
  providers: [SummaryDataService, CountryDataService, LoggerService, MapDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
