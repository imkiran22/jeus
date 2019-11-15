import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsFilterModel } from '../models/patients-filter.model';
import { Patient } from '../models/patients.model';
import { PatientService } from '../app-services/patients.service';
import {plainToClass} from "class-transformer";


@Component({
    selector: 'app-patients-tab',
    templateUrl: './patients-tab.component.html',
    styleUrls: ['./patients-tab.component.scss']
})
export class PatientsTabComponent implements OnInit {
    patientsFilterModel :PatientsFilterModel
    tableQueryParms :{}
    tabPageNum :{}
    tabPageCount :{}
    patients :Patient[]
    patientsCount :number
    constructor(private activeRoute :ActivatedRoute, 
        private router: Router,
        private patientsService :PatientService) { }

    ngOnInit() {
        this.initTableQueryParams()
        this.patients = []
        this.tabPageNum = {}
        this.tabPageCount = {}
        this.patientsFilterModel = new PatientsFilterModel(false, false, false, 0, 150, [])
        this.activeRoute.queryParamMap.subscribe(params => {
            this.patients = []
            this.getPatients(params["params"])
        })
    }

    getPatients(params) {
        let hospitalUuid :string = JSON.parse(localStorage.getItem("current_hospital")).uuid
        this.patientsService.getRegisteredPatients(hospitalUuid, params).subscribe((res: {[key:string]: any}) => {
          this.patientsCount = res["patientsCount"]
          for (let index = 0; index < res.patients.length; index++) { 
            let patient: Patient= plainToClass(Patient, res.patients[index]);
            this.patients.push(patient)
          } 
        }, (err) => {
          console.log('ERROR GETTING PATIENTS RECORDS', err);
        });
    }

    constructPaginationParamsFromQueryParams(params){
        let patientsFilterModel :PatientsFilterModel = new PatientsFilterModel(false, false, false, 0, 150, [])
        patientsFilterModel.initializeWithQueryParams(params)
        
    }

    initTableQueryParams() {
        this.tableQueryParms = {}
        this.tableQueryParms["page_num"] = 1
        this.tableQueryParms["page_count"] = 10
        this.tableQueryParms["status"] = "all_patients"
    }

    onTabChange(tabStatus: string) {
        this.tableQueryParms["status"] = tabStatus
        this.tableQueryParms["page_num"] = this.tabPageNum[tabStatus] || 1
        this.tableQueryParms["page_count"] = this.tabPageCount[tabStatus] || 10
        this.navigate()
    }

    onPageChange(pageNumber: number) {
        this.tableQueryParms["page_num"] = pageNumber
        this.tabPageNum[this.tableQueryParms["status"]] = this.tableQueryParms["page_num"]
        this.navigate()
    }

    onPageCountChange(pageCount: number) {
        this.tableQueryParms["page_count"] = pageCount
        this.tabPageCount[this.tableQueryParms["status"]] = this.tableQueryParms["page_count"]
        this.navigate()
    }

    populateQueryParamsWithTableQueryParms(queryParams :{}){
        queryParams["filter_eq_status"] = this.tableQueryParms["status"]
        queryParams["page_num"] = this.tableQueryParms["page_num"]
        queryParams["page_count"] = this.tableQueryParms["page_count"]
    }

    navigate() {
        let queryParams = this.patientsFilterModel.getQueryParams()
        this.populateQueryParamsWithTableQueryParms(queryParams)
        this.router.navigate(['/patients'], {queryParams: queryParams})
    }

    onFillterApply(patientsFilterModel) {
        this.patientsFilterModel = patientsFilterModel
        this.navigate()
    }
}