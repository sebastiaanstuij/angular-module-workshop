import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { WorldSummary } from '../shared/models/world-summary.model';
import { LoggerService } from './logger.service';


@Injectable({
  providedIn: 'root'
})
export class SummaryDataService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { 
    this.loggerService.log('DataService loaded');
  }
  
  public getSummary(): Observable<WorldSummary> {
    this.loggerService.log('getSummary method called');
    return this.http.get<WorldSummary>('https://api.covid19api.com/summary');
  }
  
}
