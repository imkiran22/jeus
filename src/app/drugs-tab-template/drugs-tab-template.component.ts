import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs-tab-template',
  templateUrl: './drugs-tab-template.component.html',
  styleUrls: ['./drugs-tab-template.component.scss']
})

export class DrugsTabTemplateComponent implements OnInit {
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];
  cars: any[];

  cols: any[];
  constructor() { 
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.cars = [
      { vin: '1', year: '2000', brand: 'guru', color: 'yellow'},
      { vin: '2', year: '2001', brand: 'shobhit', color: 'red'}
    ];
  }

  ngOnInit() {

  }
  filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
        let brand = this.brands[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrands.push(brand);
        }
    }
}
}
