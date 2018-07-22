// customer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'http://localhost';
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this
            .http
            .get(`${this.url}/customer/getcustomers`);
        }
}