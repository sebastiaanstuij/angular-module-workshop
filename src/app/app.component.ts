import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: any = undefined;

  constructor(private loggerService: LoggerService, private covidDataService: DataService) {}

  ngOnInit(): void {
    this.covidDataService.getSummary().subscribe((data) => {
      this.data = data;
      console.log(data);
    })
  }


}
