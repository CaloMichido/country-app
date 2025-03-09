import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';
import {Region} from '../../interfaces/region.type';






@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  constructor(public countriesService: CountriesService) {}
  public countries: Country[]=[];
  public regions: Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region

  ngOnInit() {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }


  searchByRegion(region: Region) {
      this.selectedRegion = region


      console.log('desde ByRegionPage');
      this.countriesService.searchRegion(region).subscribe( countries => {
        this.countries = countries;
      });
      console.log({region})
    }

}
