import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private countryHistorySubject = new BehaviorSubject<CacheStore['countryHistory']>([]);

  public countryHistory$ = this.countryHistorySubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }


  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
    countryHistory: [],
  };

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    if (!Array.isArray(this.cacheStore.countryHistory)) {
      this.cacheStore.countryHistory = [];
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private getCountriesRequest(url: string) {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  findCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  storeCountryInHistory(countryName: string, cca3: string) {
    const newCountry = { countryName, cca3 };

    // Filtra el historial para eliminar duplicados
    this.cacheStore.countryHistory = this.cacheStore.countryHistory.filter(
      (country) => country.cca3 !== cca3
    );

    // Agrega el nuevo país al inicio del historial
    this.cacheStore.countryHistory = [
      newCountry,
      ...this.cacheStore.countryHistory,
    ];

    // Guarda el historial actualizado en el almacenamiento local
    this.saveToLocalStorage();


    this.countryHistorySubject.next(this.cacheStore.countryHistory);
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
}
