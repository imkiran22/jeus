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
    domain: ['#003882', '#0056a6', '#0a94d5', '#0047b8', '#00a2e0','#006ec7',
  '#00b8e0','#008bcc', '#02abc9','#0199b9','#0099ab','#00b0c7','#2cc7d5','#7ed4de']
  };

  constructor() {
    Object.assign(this, {example, exampleTwo })
  }

  onSelect(event) {
    console.log(event);
  }

}
