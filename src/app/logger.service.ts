import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
    this.log('LoggerService loaded');
  }

  public log(message: string): void {
    console.log(message);
  }
}
