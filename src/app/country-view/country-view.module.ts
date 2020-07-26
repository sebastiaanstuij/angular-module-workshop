import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CountryviewComponent } from './countryview.component';


@NgModule({
  declarations: [CountryviewComponent],
  imports: [
    SharedModule
  ],
  exports: [
    CountryviewComponent
  ]
  
})
export class CountryViewModule { 
  constructor() {
    console.log('CountryViewModule loaded');
 }
}
