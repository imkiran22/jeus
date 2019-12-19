import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
 imports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule,MultiSelectModule,
  AutoCompleteModule,AccordionModule],
 declarations: [  ],
 exports:      [ NgSelectModule, Ng5SliderModule, NgxChartsModule,CalendarModule,MultiSelectModule,
  AutoCompleteModule,AccordionModule]
})
export class SharedModule { }