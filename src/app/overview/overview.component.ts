import { Component, OnInit } from '@angular/core';

import { SummaryDataService } from '../core/summary-data.service';
import { WorldSummary } from '../shared/models/world-summary.model';
import { Observable } from 'rxjs';

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
