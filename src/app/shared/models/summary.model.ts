import { Country } from './country.model';

export interface Summary {
   Global: {
    NewConfirmed: string;
    TotalConfirmed: string;
    NewDeaths: string;
    TotalDeaths: string;
    NewRecovered: string;
    TotalRecovered: string;
   };
   Countries: [Country];
   Date: string;
}