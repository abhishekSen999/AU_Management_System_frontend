import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public url: any = baseUrl;
  private user: SocialUser;
  private loggedIn: boolean = false;
  private idToken: String;

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(DOCUMENT) readonly document: Document,
    private authService: AuthService
  ) {}

  getIdToken() {
    return this.idToken;
  }

  checkLoginStatus() {
    this.authService.authState.subscribe((user1) => {
      this.user = user1;
      this.loggedIn = user1 != null;

      if (this.loggedIn) {
        this.idToken = user1.idToken;
        // console.log(this.loggedIn );
        console.log(this.user.idToken);
        this.redirectToAppropriatePage();
      } else {
      }
      // this.checkLoginStatus();
    });
  }

  checkIfUserNeedsRelogin() {
    this.authService.authState.subscribe(
      (user1) => {
        this.user = user1;
        this.loggedIn = user1 != null;

        if (!this.loggedIn) {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
  }

  redirectToAppropriatePage() {
    console.log('making get request');
    this.http.get(`${this.url}/user`).subscribe(
      (userLevel) => {
        if (userLevel == 'manager' || userLevel == 'admin')
          this.router.navigate(['/manager']);
        else {
          alert('Unauthorised user check the account you have logged in with');
          this.authService.signOut();
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        alert('Unauthorised user check the account you have logged in with');
        this.authService.signOut();
        this.router.navigate(['/login']);
      }
    );
  }

  //  get window(): Window { return this.document.defaultView; }
  //    getAuthorizationlevel(){
  //     console.log("authorization level");
  //     const urlExtensionLogin = this.url+"/user";
  //     // const redirectionUrl = this.url+"/oauth2/authorization/google"; //learn to get redirection location from observable

  //     return this.httpClient.get(urlExtensionLogin);

  //    }

  //    redirect(url: string, target = '_blank'): Promise<boolean> {

  //     return new Promise<boolean>( (resolve, reject) => {

  //      try { resolve(!!this.window.open(url, target)); }
  //      catch(e) { reject(e); }
  //   });
  // }
}
