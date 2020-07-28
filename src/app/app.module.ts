import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    OverviewModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
