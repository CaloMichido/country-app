import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countriesService: CountriesService ) { }
  public initialValue:string ='';

  ngOnInit() {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }


  public countries: Country[]=[];
  public isLoading: boolean = false;
  searchByCapital( term: string):void {
    this.isLoading = true;
    console.log('Desde ByCapitalPage')
    this.countriesService.searchCapital(term).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });

  }
}
