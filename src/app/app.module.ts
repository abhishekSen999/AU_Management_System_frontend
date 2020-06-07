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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OnboardService } from './onboard.service';
import { DisplayOnboardListComponent } from './display-onboard-list/display-onboard-list.component';
import { LogComponent } from './log/log.component';
import { LogService } from './log.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { AuthenticationHelper } from './authenticationHelper';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsService } from './analytics.service';
import { GoogleChartsModule } from 'angular-google-charts';
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("189837427266-8b7tiralsltoh07l2ep4fg1hnlo2narf.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}




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
    LogComponent,
    AnalyticsComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule ,
    GoogleChartsModule

    
  ],
  providers: [AuthorizationService,OnboardService,LogService,AnalyticsService,
    {provide: AuthServiceConfig,useFactory: provideConfig },
    {provide: HTTP_INTERCEPTORS,useClass: AuthenticationHelper, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
