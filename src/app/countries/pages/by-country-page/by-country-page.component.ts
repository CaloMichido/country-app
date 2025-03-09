import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  public initialValue: string ='';
  ngOnInit() {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }


  constructor(private countriesServices: CountriesService) {}
  public countries: Country[]=[];
  searchByCountry(term:string):void {
    console.log('desde ByCountryPage')
    this.countriesServices.searchCountry(term).subscribe( countries =>{
      this.countries = countries;
    })
    console.log(term);
  }

}
