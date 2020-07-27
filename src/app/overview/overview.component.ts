import { Component, OnInit } from '@angular/core';

import { SummaryDataService } from '../core/summary-data.service';
import { WorldSummary } from '../shared/models/world-summary.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public data: WorldSummary = undefined;

  constructor(private summaryDataService: SummaryDataService) {}

  ngOnInit(): void {
    this.summaryDataService.getSummary().subscribe((data) => {
      data.Countries = data.Countries.sort((a, b) => parseInt(b.NewConfirmed)-parseInt(a.NewConfirmed));
      this.data = data;
    })
  }

}
