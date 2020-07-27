import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview.component';
import { LoggerService } from '../core/logger.service';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { 
  constructor(loggerService: LoggerService) {
    loggerService.log('OverviewModule loaded');
  }
}
