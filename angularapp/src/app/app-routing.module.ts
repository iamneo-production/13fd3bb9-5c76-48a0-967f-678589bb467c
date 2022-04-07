import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from "./signup/signup.component";



const routes: Routes = [
    { path: '', component:SignupComponent },
    { path:'dashboard',component:DashboardComponent},
    { path:'bookings',component:BookingsComponent}
];

@NgModule({
    declarations: [],
    imports:  [
        RouterModule.forRoot(routes)
    ],
exports:[
    RouterModule

]
})
export class AppRoutingModule { }

export const routingComponents =[SignupComponent,DashboardComponent,BookingsComponent]