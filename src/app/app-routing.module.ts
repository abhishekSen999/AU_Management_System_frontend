import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { ManagerHomeComponent } from "./manager-home/manager-home.component"


const routes: Routes = [
  
  { path: 'login' , component: LoginComponent , pathMatch: 'full'},
  { path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'manager', component: ManagerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
