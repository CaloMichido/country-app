import {Country} from './country.interface';
import {Region} from './region.type';


export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
  countryHistory: CountryHistory[];
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region: Region;
  countries: Country[];
}

export interface CountryHistory {
  countryName: string;
  cca3: string;
}
