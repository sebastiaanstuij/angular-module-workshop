import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SummaryDataService } from '../summary-data.service';
import { WorldSummary } from '../models/world-summary.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public data: Observable<WorldSummary>;

  constructor(private summaryDataService: SummaryDataService) {}

  ngOnInit(): void {
      this.data = this.summaryDataService.getSummary();
  }
}
