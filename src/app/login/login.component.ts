import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  private serverStatus: any;
  login(){

     
    console.log(this.authorizationService.getAuthorizationlevel());

  }


}
