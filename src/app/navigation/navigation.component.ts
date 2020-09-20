import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  home() {
    this.router.navigate(['/manager']);
  }
  onboard() {
    this.router.navigate(['/onboard']);
  }
  log() {
    this.router.navigate(['/log']);
  }

  analytics() {
    this.router.navigate(['/analytics']);
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
