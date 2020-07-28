import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { SummaryDataService } from './summary-data.service';
import { LoggerService } from './logger.service';
import { CountryDataService } from './country-data.service';
import { MapDataService } from './map-data.service';

/* there are several interpretations of CoreModule concept, here it is only used to make the AppModule more focused and because 
in lots of (older) Angular apps you'll see the CoreModule used with Services which are to be used at the Root level as part of the 'providers' declaration.
Angular now only recommends using a Core folder with the Services that are providedIn: root (so try to avoid using a CoreModule in the future).
see https://github.com/angular/angular/issues/17825 for an interesting discussion */
@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers:[
    SummaryDataService, CountryDataService, LoggerService, MapDataService
  ]
})
export class CoreModule { }
