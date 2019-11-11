import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

@NgModule({
 imports:      [ NgSelectModule, NgxBootstrapSliderModule ],
 declarations: [  ],
 exports:      [ NgSelectModule, NgxBootstrapSliderModule ]
})
export class SharedModule { }