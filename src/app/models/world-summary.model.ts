import { CountrySummary } from './country-summary.model';

export interface WorldSummary {
   Global: {
    NewConfirmed: string;
    TotalConfirmed: string;
    NewDeaths: string;
    TotalDeaths: string;
    NewRecovered: string;
    TotalRecovered: string;
   };
   Countries: [CountrySummary];
   Date: string;
}