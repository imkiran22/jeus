import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
 imports:      [ NgSelectModule, Ng5SliderModule ],
 declarations: [  ],
 exports:      [ NgSelectModule, Ng5SliderModule ]
})
export class SharedModule { }