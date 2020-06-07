import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { ManagerHomeComponent } from "./manager-home/manager-home.component"
import { OnboardComponent } from "./onboard/onboard.component"
import { LogComponent } from './log/log.component';
import { AnalyticsComponent } from './analytics/analytics.component';


const routes: Routes = [
  
  { path: 'login' , component: LoginComponent , pathMatch: 'full'},
  { path: '' , redirectTo: '/login', pathMatch: 'full'},
  { path: 'manager', component: ManagerHomeComponent},
  { path: 'onboard', component: OnboardComponent},
  { path: 'log', component: LogComponent},
  { path: 'analytics' , component: AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
