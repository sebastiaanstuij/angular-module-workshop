import { Injectable } from '@angular/core';

import _ from 'lodash';
import * as moment from 'moment';

import { LoggerService } from './logger.service';

@Injectable({
 providedIn: 'root'
})
export class MapDataService {

  constructor(private loggerService: LoggerService) { 
    this.loggerService.log('MapDataService loaded');
  }
  
  public specialMap(input: number[]): number[] {
    let now = moment().format('LLLL');

    return _.map(input, function(el){

      return el * 10;
    });
  }

}
