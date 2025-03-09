import { Component, OnInit } from '@angular/core';
import { CountryHistory } from '../../../countries/interfaces/cache-store.interface';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'shared-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent implements OnInit{
  constructor(private countriesService:CountriesService) { }

  public countriesVisited:CountryHistory[]=[];

 ngOnInit(): void {
  this.countriesService.countryHistory$.subscribe(history => {
    this.countriesVisited = history;
  });this.countriesService.countryHistory$.subscribe(history => {
    this.countriesVisited = history;
  });
 }


}
