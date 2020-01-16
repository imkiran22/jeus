import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { PatientsFilterModel } from '../models/patients-filter.model'
import { Options } from 'ng5-slider';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
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
    userForm: FormGroup;
    startValue: number = 10;
    endValue: number = 50;
    options: Options = {
      floor: 0,
      ceil: 100,
      step: 5,
      showTicks: true
    };
    closeResult: string;
    date5: Date;
    date6: Date;
    constructor(private modalService: NgbModal) { }

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
    onSelect(event) {
      this.userForm.get("userImg").setValue(event.files[0]);
    }
    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
}