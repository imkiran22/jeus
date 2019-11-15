import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
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
    showFilter :boolean = false
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

    constructor() { }

    ngOnInit() {
    }
    
    ShowHideButton() {
        this.showFilter = !this.showFilter
    }

    clearAllFilter() {
        this.patientsFilterModel.setToDefault()
    }

    onCancelClick() {
        this.showFilter = false
    }

    onApplyClick() {
        this.filterApplied.emit(this.patientsFilterModel)
        this.showFilter = false
    }

    onResetFilter() {
        this.showFilter = false
        this.clearAllFilter()
        this.filterApplied.emit(this.patientsFilterModel)
    }
}