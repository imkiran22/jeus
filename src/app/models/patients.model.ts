import {Expose} from "class-transformer";
export class Patient {
    name: string

    @Expose({ name: "profile_thumbnail_url" })
    profileThumbnailUrl: string

    @Expose({ name: "primary_diagnosis" })
    diagnosis: string

    @Expose({ name: "phone_number" })
    phoneNumber: string

    @Expose({ name: "reg_no" })
    patientRegistrationNumber: string 

    @Expose({ name: "phone_number_country_code" })
    phoneNumberCountryCode: string

    gender: string
    
    constructor (name: string, 
        profileThumbnailUrl: string,
        diagnosis: string,
        phoneNumber: string,
        patientRegistrationNumber: string){
       this.name = name
       this.profileThumbnailUrl = profileThumbnailUrl
       this.diagnosis = diagnosis
       this.phoneNumber = phoneNumber
       this.patientRegistrationNumber = patientRegistrationNumber
    }
}