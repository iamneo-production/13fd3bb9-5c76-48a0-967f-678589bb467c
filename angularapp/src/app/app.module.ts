import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { BookingsComponent } from './bookings/bookings.component';
import { SuperadminNavigationsideComponent } from './superadmin-navigationside/superadmin-navigationside.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';




@NgModule({
  declarations:[
   AppComponent,
   SignupComponent,
   DashboardComponent,
   BookingsComponent,
   SuperadminNavigationsideComponent,
   routingComponents
   

    
  ],


  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    RouterTestingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    AppRoutingModule,
    
    
  
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{ }
  

  
 
