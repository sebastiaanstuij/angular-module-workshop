import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { LoggerService } from '../logger.service';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [],
  exports: []
})
export class OverviewModule { 
  constructor(loggerService: LoggerService) {
    loggerService.log('OverviewModule loaded');
  }
}
