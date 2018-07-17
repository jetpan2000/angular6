import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterModule, Routes } from '@angular/router';

/*
const appRoutes :Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'employee', component: EmployeeComponent},
 {path:'', redirectTo:'/home'},
 {path: '**', component: NotfoundComponent}
]; */

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,EmployeeTitlePipe, HomeComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule , FormsModule      //,RouterModule.forRoot(appRoutes,{ useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
