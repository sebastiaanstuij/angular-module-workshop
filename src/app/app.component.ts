import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: any = undefined;

  constructor() { }

}
