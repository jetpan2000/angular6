import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatSelectModule, MatMenuModule,MatCardModule, MatTableModule, MatRadioModule,
  MatSlideToggleModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MaterialModule } from './material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import {RouterModule} from '@angular/router';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';

import {CustomerService} from './customer.service';

import {HttpClientModule} from '@angular/common/http';

//import {MyDirectives} from './directives/highlight-me';

/*
const appRoutes :Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'employee', component: EmployeeComponent},
 {path:'', redirectTo:'/home'},
 {path: '**', component: NotfoundComponent}
]; */

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,EmployeeTitlePipe, HomeComponent, NotfoundComponent, FirstPageComponent, SecondPageComponent, ThirdPageComponent, PagedetailsComponent
  ],
  imports: [
    BrowserModule , FormsModule, BrowserAnimationsModule  ,MatButtonModule, MatCheckboxModule ,MatDatepickerModule,MatNativeDateModule,
    MatSelectModule ,MatMenuModule ,MatCardModule, MatTableModule, MatRadioModule, MatSlideToggleModule,
    HttpClientModule,CustomerService,
    RouterModule.forRoot([
      {
        path:'', 
        component:HomeComponent
      },
      {
        path:'firstpage',
        component:FirstPageComponent
      },
      {
        path:'secondpage',
        component:SecondPageComponent
      },
      {
        path:'thirdpage',
        component:ThirdPageComponent
      },
      {
        path:'pagedetails/:pageid',
        component:PagedetailsComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      },
    ])//,RouterModule.forRoot(appRoutes,{ useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
