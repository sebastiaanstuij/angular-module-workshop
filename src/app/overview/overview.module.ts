import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { LoggerService } from '../logger.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
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
