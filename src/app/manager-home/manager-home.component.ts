import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(public authorizationService : AuthorizationService) { }

  ngOnInit(): void {

    this.authorizationService.checkIfUserNeedsRelogin();
  }

}
