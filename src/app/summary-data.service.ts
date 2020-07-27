import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WorldSummary } from './models/world-summary.model';
import { LoggerService } from './logger.service';

@Injectable()
export class SummaryDataService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { 
    this.loggerService.log('SummaryDataService loaded');
  }
  
  public getSummary(): Observable<WorldSummary> {
    this.loggerService.log('getSummary method called');
    return this.http.get<WorldSummary>('https://api.covid19api.com/summary').pipe(
      map(data => {
        let sortedCountries = data.Countries.sort((a, b) => parseInt(b.NewConfirmed)-parseInt(a.NewConfirmed));
        return {...data, countries: sortedCountries};
      })
    )
  }
  
}
