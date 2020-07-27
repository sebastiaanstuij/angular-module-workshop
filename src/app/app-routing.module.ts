import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  // {
  //   path: 'country-view/:country',
  //   component: YourCountryComponent
  // },
  { 
    path: '**',
    redirectTo: '/overview', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
