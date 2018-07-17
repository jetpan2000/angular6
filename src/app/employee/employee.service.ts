import {Injectable} from '@angular/core';
import {IEmployee} from './employee';

@Injectable()
export class EmployeeService{
    getEmployees(): IEmployee[]{
        return [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
        {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
        {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
        {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
        {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
      ];   

    }

    getEmployeesByGender(gender: string) : IEmployee[] {
        if (gender == 'all'){
         return  [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
          {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
          {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
          {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
          {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
        ];   
  
        }
        else if (gender == 'male'){
            return [{code:"101", firstName:'firstName1', lastName:'lastname1',gendar:'male', email:'test1@test.com',birthday:'2000-1-4', salary: 40004},
         {code:"104",firstName:'firstName4', lastName:'lastname4', email:'test4@test.com',gendar:'male',birthday:'2000-1-7', salary: 60000.2},
          {code:"105",firstName:'firstName5', lastName:'lastname5', email:'test5@test.com',gendar:'male',birthday:'2000-1-8', salary: 70000.56},
        ]; 
        }
        else if (gender == 'female'){
         return [ {code:"102",firstName:'firstName2', lastName:'lastname2', email:'test2@test.com',gendar:'female',birthday:'2000-1-5', salary: 40005.4567},
          {code:"103",firstName:'firstName3', lastName:'lastname3', email:'test3@test.com',gendar:'female',birthday:'2000-1-6', salary: 50000},
            ]
        }
  
      }

}