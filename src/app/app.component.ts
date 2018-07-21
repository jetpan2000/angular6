import { Component, Input, Output,  } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app: Angular 6';
  isDisabled: boolean = false;
  is_Disabled:boolean = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  myCount: number= 111;  /// parent variable

  countChange(event){
    this.myCount = event;
  }

  increment() {
    this.myCount++;
  }

  decrement() {
    this.myCount--;
  }
}

export interface Food {
  value: string;
  viewValue: string;
}
