import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs-tab-template',
  templateUrl: './drugs-tab-template.component.html',
  styleUrls: ['./drugs-tab-template.component.scss']
})
export class DrugsTabTemplateComponent implements OnInit {
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];
  constructor() { }

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
