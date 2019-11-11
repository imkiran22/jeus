
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class PatientService {
    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ){}
    getPatientsListForHospitalUrl(hospitalUuid :string) {
        return `${environment.entityServiceUrl}/api/v1/hospitals/${hospitalUuid}/get_registered_patients`;
    }

    getRegisteredPatients(hospitalUuid: string, paginationFilterParams: {}) {
        let getPatientsUrl :string = this.getPatientsListForHospitalUrl(hospitalUuid)
        return this.http.get(getPatientsUrl + "?" + this.getQueryParamsUrlString(paginationFilterParams));
    }

    getQueryParamsUrlString(paginationFilterParams: {}) :string{
        let queryParam :string = ""
        queryParam = "page_count=" + paginationFilterParams["page_count"]
        + "&" + "page_num=" + paginationFilterParams["page_num"]
        return queryParam
    }

}