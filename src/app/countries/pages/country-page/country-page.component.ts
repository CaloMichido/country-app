import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountriesService} from '../../services/countries.service';
import {switchMap} from 'rxjs';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private countriesServices: CountriesService) {}


  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.countriesServices.findCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigate(['/']);
        }
        this.countriesServices.storeCountryInHistory(country.name.common, country.cca3);
        return this.country=country;
      })
  }
}
