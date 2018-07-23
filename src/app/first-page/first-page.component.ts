import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  customers: any[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this
        .customerService
        .getCustomers()
        .subscribe((data: any[]) => {
          this.customers = data;
          console.log(data);
      });
  }

}
