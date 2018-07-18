import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  count : number = 0;  // property from attribute, input attribute

  @Output()  //this means it is visible in parent component,   output attribute, is a method, emit event with a number value
  changeHappened: EventEmitter<number> = new EventEmitter<number>(); 
// this EventEmitter output method will be called in parent compoent, call 


  increment() {
    this.count++;
    this.changeHappened.emit(this.count);
  }

  decrement() {
    this.count--;
    this.changeHappened.emit(this.count);
  }
}
