import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { CountryViewModule } from './country-view/country-view.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CountryViewModule,
    OverviewModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
