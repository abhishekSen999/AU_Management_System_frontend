import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { LoginComponent } from './login/login.component'
import { AuthorizationService } from './authorization.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OnboardService } from './onboard.service';
import { DisplayOnboardListComponent } from './display-onboard-list/display-onboard-list.component';
import { LogComponent } from './log/log.component';
import { LogService } from './log.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManagerHomeComponent,
    LoginComponent,
    NavigationComponent,
    OnboardComponent,
    DisplayOnboardListComponent,
    LogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthorizationService,OnboardService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
