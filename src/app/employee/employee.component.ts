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
  }