import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../core/logger.service';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public data: any = undefined;

  constructor(private loggerService: LoggerService, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSummary().subscribe((data) => {
      this.data = data;
      console.log(data);
    })
  }

}
