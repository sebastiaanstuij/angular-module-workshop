import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CountryViewComponent } from './country-view.component';
import { LoggerService } from '../core/logger.service';


@NgModule({
  declarations: [CountryViewComponent],
  imports: [
    SharedModule
  ],
  exports: [
    CountryViewComponent
  ]
  
})
export class CountryViewModule { 
  constructor(loggerService: LoggerService) {
    loggerService.log('CountryViewModule loaded');
 }
}
