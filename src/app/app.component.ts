import { Component } from '@angular/core';
import { Patient, PatientProblem } from './app.patientComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  patientObj = new Patient();
  patientObjs = new Array<Patient>();
  patientProblem = new PatientProblem();

  constructor() {
    // this.patientObj.problems.push(new PatientProblem());
  }
  
  addProblem() {
    this.patientObj.problems.push(this.patientProblem);
    this.patientProblem = new PatientProblem();
  }

  clearProblem() {
    this.patientProblem = new PatientProblem(); 
  }
  
  deleteProblem(index:number) {
    this.patientObj.problems.splice(index,1);
  }

  resetRecord() {
    this.patientObj = new Patient();
    this.patientProblem = new PatientProblem();
  }

  addRecord() {
    this.patientObjs.push(this.patientObj);
    this.patientObj = new Patient();
  }
}
