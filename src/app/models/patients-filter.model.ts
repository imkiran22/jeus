export class PatientsFilterModel {
    constructor (private maleGenderFilterApplied: boolean, 
        private femaleGenderFilterApplied: boolean,
        private thirdGenderFilterApplied: boolean,
        private minAge: number,
        private maxAge: number,
        private selectedDiagnosis: string[]
        ){
        }
    public genderFilterApplied(): boolean {
        return this.maleGenderFilterApplied || this.femaleGenderFilterApplied || this.thirdGenderFilterApplied
    }

    
    public getQueryParams(): {} {
        let queryParams = {}
        if(this.genderFilterApplied()) {
            queryParams["filter_in_gender"] = ""
            if(this.maleGenderFilterApplied) {
                queryParams["filter_in_gender"] = queryParams["filter_in_gender"].concat("male").concat(",")
            }
            if(this.femaleGenderFilterApplied) {
                queryParams["filter_in_gender"] = queryParams["filter_in_gender"].
                    concat("female").concat(",")
            }
            if(this.thirdGenderFilterApplied) {
                queryParams["filter_in_gender"] = queryParams["filter_in_gender"].
                    concat("third_gender").concat(",")
            }
        }
        if(queryParams["filter_in_gender"] > 0 ) {
            queryParams["filter_in_gender"] = queryParams["filter_in_gender"].substring(0, queryParams["filter_in_gender"].length - 1)
        }
        queryParams["filter_gteq_age"] = this.minAge
        queryParams["filter_leq_age"] = this.maxAge
        if(this.selectedDiagnosis.length > 0) {
            queryParams["filter_in_diagnosis"] = ""
            for(let i = 0 ; i < this.selectedDiagnosis.length; i++) {
                queryParams["filter_in_diagnosis"] = queryParams["filter_in_diagnosis"].concat(this.selectedDiagnosis[i]).concat(",")
            }
            if(queryParams["filter_in_diagnosis"].length > 0) {
                queryParams["filter_in_diagnosis"] = queryParams["filter_in_diagnosis"].substring(0, queryParams["filter_in_diagnosis"].length - 1)
            }
        }
        return queryParams
    }

    initializeWithQueryParams(queryParams: {}): void {
        if(queryParams["filter_in_gender"] != null) {
            if(queryParams["filter_in_gender"].includes("male")) {
                this.maleGenderFilterApplied = true
            }
            if(queryParams["filter_in_gender"].includes("female")) {
                this.femaleGenderFilterApplied = true
            }
            if(queryParams["filter_in_gender"].includes("third_gender")) {
                this.thirdGenderFilterApplied = true
            }
        }
        if(queryParams["filter_gteq_age"] != null && queryParams["filter_gteq_age"].length > 0){
            this.minAge = parseInt(queryParams["filter_gteq_age"])
        }
        if(queryParams["filter_lteq_age"] != null && queryParams["filter_lteq_age"].length > 0){
            this.maxAge = parseInt(queryParams["filter_lteq_age"])
        }
        if(queryParams["filter_in_diagnosis"] != null && queryParams["filter_in_diagnosis"].length > 0){
            this.selectedDiagnosis = queryParams["filter_in_diagnosis"].split(",")
        }
    }

    public setToDefault() :void {
        this.minAge = 0
        this.maxAge = 150
        this.selectedDiagnosis = new Array()
        this.femaleGenderFilterApplied = false
        this.maleGenderFilterApplied = false
        this.thirdGenderFilterApplied = false
    }
}