import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CountryDataService } from '../core/country-data.service';
import { CountryTotalAll } from '../shared/models/country-total-all.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-countryview',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss']
})
export class CountryViewComponent implements OnInit {

  public data: Observable<CountryTotalAll[]>;
  public country: string = undefined;

  constructor(
    private countryDataService: CountryDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.country = params.country;
    });

    this.data = this.countryDataService.getTotalAllStatus(this.country);
  }

}
