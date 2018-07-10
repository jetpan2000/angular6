import {Component} from '@angular/core';
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })
  export class EmployeeComponent {
    firstName:string = 'John';
    lastName: string = 'Steve';
    email :string= 'test@test.com';
    columnSpan: number = 3;


    employees:any[];

    constructor() {
      this.employees = [{firstName:'firstName1', lastName:'lastname1', email:'test1@test.com'},
      {firstName:'firstName2', lastName:'lastname2', email:'test2@test.com'},
      {firstName:'firstName3', lastName:'lastname3', email:'test3@test.com'},
    ];   
    }

    getEmployees():void {
      this.employees = [{firstName:'firstName1', lastName:'lastname1', email:'test1@test.com'},
      {firstName:'firstName2', lastName:'lastname2', email:'test2@test.com'},
      {firstName:'firstName3', lastName:'lastname3', email:'test3@test.com'},
      {firstName:'firstName4', lastName:'lastname4', email:'test4@test.com'},
      {firstName:'firstName5', lastName:'lastname5', email:'test5@test.com'},
    ];   

    }
  }