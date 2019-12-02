import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CalendarModule } from 'primeng/calendar';

@NgModule({
 imports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule ],
 declarations: [  ],
 exports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule ]
})
export class SharedModule { }