export interface IEmployee{
    code : string;
    firstName : string;
    lastName : string;
    email : string;
    birthday: string;
    salary: number;
    gendar: string;
    department?: string;
   // calculateMonthlySalary(salary:number):number;
}

export class Employee implements IEmployee {
    constructor(public code: string, public firstName: string, public lastName: string, public email: string,
        public birthday: string, public salary : number, public gendar: string){
    }

    calculateMonthlySalary(salary: number):number{
        return salary/12;
    }

    userText: string="from parent";
}