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
  //   this.countLoginAttempt+=1;
  //   const urlExtensionLogin = this.authorizationService.url+"/user";
  //   this.authorizationLevel= this.authorizationService.getAuthorizationlevel().subscribe(
  //     (userLevel) => {
  //       console.log(userLevel);

  //       if( userLevel == "manager" || userLevel == "admin" )
        
  //       this.router.navigate(['/manager']);


  //       },
  //     (error) => {this.authorizationService.redirect(urlExtensionLogin,'_blank');
  //          if (this.countLoginAttempt<this.maxLoginTry) 
                    
  //               this.login();}          
  //   );
  //   console.log();


      
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.authorizationService.checkLoginStatus();

    // this.authorizationLevel= this.authorizationService.getAuthorizationlevel().subscribe(
    //     (userLevel) => {
    //         console.log(userLevel);
        
    //         if( userLevel == "manager" || userLevel == "admin" )
    //               this.router.navigate(['/manager']);
    //     });
  }




  
  signOut(): void {
    this.authService.signOut();
  } 



}
