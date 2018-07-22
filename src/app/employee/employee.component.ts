import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import {CustomerService} from '../customer.service';

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

    customers: any[];
    employees:IEmployee[];

    constructor(private customerService: CustomerService) {
      this.employees = [{code:"101",firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com', birthday:'2000-1-1', salary: 40000},
      {code:"102",firstName:'firstName2', lastName:'lastname2', gendar:'male',email:'test2@test.com',birthday:'2000-1-2', salary: 40010},
      {code:"103",firstName:'firstName3', lastName:'lastname3',gendar:'female', email:'test3@test.com',birthday:'2000-1-3', salary: 40200.32},
    ];   
    }

    ngOnInit() {
      this
        .customerService
        .getCustomers()
        .subscribe((data: any[]) => {
          this.customers = data;
      });
    }

    getEmployees():void {
      this.employees = [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
      {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
      {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
      {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
      {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
    ];   

    }

    getEmployeesByGender(gender: string){
      if (gender == 'all'){



        this.employees = [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
        {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
        {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
        {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
        {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
      ];   

      }
      else if (gender == 'male'){
        this.employees = [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
       {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
        {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
      ]; 
      }
      else if (gender == 'female'){
      this.employees = [ {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
        {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
          ]
      }

    }

    trackByEmpCode(index:number, employee: IEmployee) : string {
      return employee.code;

    }
  }