import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CountryViewComponent } from './country-view.component';
import { LoggerService } from '../core/logger.service';

export const DetailsRoutes: Routes=[
  {
      path: '',
      component: CountryViewComponent
  }
]

@NgModule({
  declarations: [CountryViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(DetailsRoutes),
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
