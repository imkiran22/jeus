import { Component, OnInit, ViewChild, Renderer2, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { PatientsFilterModel } from '../models/patients-filter.model'
import { Options } from 'ng5-slider';
@Component({
    selector: 'app-patients-filter',
    templateUrl: './patients-filter.component.html',
    styleUrls: ['./patients-filter.component.scss']
})
export class PatientsFilterComponent implements OnInit {    
    @Output() filterApplied: EventEmitter<{}> = new EventEmitter();
    @Input() patientsFilterModel :PatientsFilterModel
    maleCheckBoxChecked :boolean = false
    femaleCheckBoxChecked :boolean = false
    thirdGenderCheckBoxChecked :boolean = false
    minAge :number = 0
    maxAge :number = 150
    diagnosis :string[] = []

    startValue: number = 10;
    endValue: number = 50;
    options: Options = {
      floor: 0,
      ceil: 100,
      step: 5,
      showTicks: true
    };

    @ViewChild('patientsfilterpopinner') filterPopup :ElementRef; 
    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.filterPopup.nativeElement, 'visibility', 'hidden');
    }
    
    ShowHideButton() {
        this.renderer.setStyle(this.filterPopup.nativeElement, 'visibility', 'visible');
    }

    clearAllFilter() {
        this.patientsFilterModel.setToDefault()
    }

    onCancelClick() {
        this.renderer.setStyle(this.filterPopup.nativeElement, 'visibility', 'hidden');
    }

    onApplyClick() {
        this.renderer.setStyle(this.filterPopup.nativeElement, 'visibility', 'hidden');
        this.filterApplied.emit(this.patientsFilterModel)
    }
}