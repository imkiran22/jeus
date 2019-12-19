import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-patient-imr',
  templateUrl: './patient-imr.component.html',
  styleUrls: ['./patient-imr.component.scss']
})
export class PatientImrComponent implements OnInit {
  images: Array<any> = []
  constructor() {}

  ngOnInit() {
  }
 
}
