import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Summary } from '../shared/models/summary.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('DataService loaded');
  }
  
  public getSummary(): Observable<Summary> {
    console.log('DataService.getSummary method called');
    return this.http.get<Summary>('https://api.covid19api.com/summary');
  }
  
}
