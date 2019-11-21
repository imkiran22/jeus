import { Component, OnInit } from '@angular/core';
import { single,example,exampleTwo } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

  single: any[];
  example: any[];
  exampleTwo: any[];
  view: any[] = [, 400];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0099cc','#093021']
  };

  constructor() {
    Object.assign(this, {example, exampleTwo })
  }

  onSelect(event) {
    console.log(event);
  }

}
