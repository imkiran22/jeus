import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { COUNTRIES, Country } from '../table-model';
import { PatientService } from '../app-services/patients.service';
import {Patient} from '../models/patients.model'
import {plainToClass} from "class-transformer";

@Component({
    selector: 'app-patients-table',
    templateUrl: './patients-table.component.html',
    styleUrls: ['./patients-table.component.scss']
})
export class PatientsTableComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = COUNTRIES.length;
  patientsCount :number  
  patients :Patient[]
  currentPageNumber: number = 1
  paginationFilterParams: {} = {}
  @Input("status") patientStatus :string

  constructor(private patientsService: PatientService){
  }

  ngOnInit() {
    this.refreshPatientsList()
  }

  onPageChange(pageNumber: number) {
    this.currentPageNumber = pageNumber
    this.refreshPatientsList()
  }

  onPageCountChange(val :number) {
    this.pageSize = val
    this.refreshPatientsList()
  }

  refreshPatientsList() {
    this.populatePaginationAndFilterParams()
    this.patients = []
    this.getPatients()
  }

  populatePaginationAndFilterParams() {
    this.paginationFilterParams["page_num"] = this.currentPageNumber
    this.paginationFilterParams["page_count"] = this.pageSize
  }

  getPatients() {
    let hospitalUuid :string = JSON.parse(localStorage.getItem("current_hospital")).uuid
    this.patientsService.getRegisteredPatients(hospitalUuid, this.paginationFilterParams).subscribe((res: {[key:string]: any}) => {
      this.patientsCount = res["patientsCount"]
      for (let index = 0; index < res.patients.length; index++) { 
        console.log(res.patients[index]); 
        let patient: Patient= plainToClass(Patient, res.patients[index]);
        this.patients.push(patient)
        console.log("check after this")
        console.log(patient)
      } 
    }, (err) => {
      console.log('ERROR GETTING PATIENTS RECORDS', err);
    });
  }

}

