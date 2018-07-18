import { Component, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app: Angular 6';
  isDisabled: boolean = false;
  is_Disabled:boolean = false;

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
