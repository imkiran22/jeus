import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Options } from 'ng5-slider';
@Component({
    selector: 'app-patients-filter',
    templateUrl: './patients-filter.component.html',
    styleUrls: ['./patients-filter.component.scss']
})
export class PatientsFilterComponent implements OnInit {
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
        this.setAllPropertiesToInitialValue()
    }

    setAllPropertiesToInitialValue() {
        this.maleCheckBoxChecked = false
        this.femaleCheckBoxChecked = false
        this.thirdGenderCheckBoxChecked = false
        this.minAge = 0
        this.maxAge = 150
        this.diagnosis = []
    }

    onCancelClick() {
        this.renderer.setStyle(this.filterPopup.nativeElement, 'visibility', 'hidden');
    }

    onApplyClick() {
        console.log("apply clicked")
    }
}