
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

    getRegisteredPatients(hospitalUuid: string, queryParams: {}) {
        let getPatientsUrl :string = this.getPatientsListForHospitalUrl(hospitalUuid)
        return this.http.get(getPatientsUrl + "?" + this.getQueryParamsUrlString(queryParams));
    }

    getQueryParamsUrlString(queryParams: {}) :string {
        let queryParam :string = ""
        for (var key in queryParams) {
            if (queryParams.hasOwnProperty(key)) {
                var val = queryParams[key];
                queryParam = queryParam + key + "=" + val + "&"
                console.log(val);
            }
        }
        return queryParam
    }

}