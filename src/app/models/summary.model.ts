import { Country } from './country.model';

export interface Summary {
   Global: {
    NewConfirmed: String;
    TotalConfirmed: String;
    NewDeaths: String;
    TotalDeaths: String;
    NewRecovered: String;
    TotalRecovered: String;
   };
   Countries: [Country];
   Date: String;
}