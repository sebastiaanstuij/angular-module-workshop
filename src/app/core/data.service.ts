import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Summary } from '../models/summary.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('CovidDataService loaded');
  }
  
  public getSummary(): Observable<Summary> {
    console.log('CovidDataService.getActualData method called');
    return this.http.get<Summary>('https://api.covid19api.com/summary');
  }
  
}
