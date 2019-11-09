import { Component } from '@angular/core';
import { COUNTRIES, Country } from '../table-model';

@Component({
    selector: 'app-patients-table',
    templateUrl: './patients-table.component.html',
    styleUrls: ['./patients-table.component.scss']
})


export class PatientsTableComponent {

  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

