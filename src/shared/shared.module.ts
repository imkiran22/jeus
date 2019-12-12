import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
 imports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule,MultiSelectModule ],
 declarations: [  ],
 exports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule,MultiSelectModule ]
})
export class SharedModule { }