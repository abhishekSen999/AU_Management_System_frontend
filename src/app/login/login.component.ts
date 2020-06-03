import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import { Router,ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  private serverStatus: any;
  private authorizationLevel: any;
  private countLoginAttempt= 0;
  private maxLoginTry = 3;
  login(){
    this.countLoginAttempt+=1;
    const urlExtensionLogin = this.authorizationService.url+"/user";
    this.authorizationLevel= this.authorizationService.getAuthorizationlevel().subscribe(
      (userLevel) => {
        console.log(userLevel);

        if( userLevel == "manager" || userLevel == "admin" )
        console.log("line 28")
        this.router.navigate(['/manager']);


        },
      (error) => {this.authorizationService.redirect(urlExtensionLogin,'_blank');
           if (this.countLoginAttempt<this.maxLoginTry) 
                    
                this.login();}          
    );
    console.log();

  }


}
