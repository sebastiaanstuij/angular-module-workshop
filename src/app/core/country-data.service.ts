import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { CountryTotalAll } from '../shared/models/country-total-all.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { 
    this.loggerService.log('DataService loaded');
  }
  
  public getTotalAllStatus(country: string): Observable<CountryTotalAll[]> {

    this.loggerService.log('getTotalAllStatus method called');
    return this.http.get<CountryTotalAll[]>('https://api.covid19api.com/total/country/' + country).pipe(
      map(data => data.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    ));
  }
  
}
