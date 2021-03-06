import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import { Router} from '@angular/router'
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  private serverStatus: any;
  private authorizationLevel: any;
  // private countLoginAttempt= 0;
  // private maxLoginTry = 3;
  login(){
  

      
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
           (value)=>this.authorizationService.checkLoginStatus(),
           (error)=>{});

  }


}
