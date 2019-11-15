import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { PatientService } from '../app-services/patients.service';
import {Patient} from '../models/patients.model'

@Component({
    selector: 'app-patients-table',
    templateUrl: './patients-table.component.html',
    styleUrls: ['./patients-table.component.scss']
})
export class PatientsTableComponent implements OnInit {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  @Output() onPageCountChange: EventEmitter<number> = new EventEmitter();
  @Input() patients :Patient[]
  @Input() patientsCount :number

  constructor(private patientsService: PatientService){
  }

  ngOnInit() {

  }


}

