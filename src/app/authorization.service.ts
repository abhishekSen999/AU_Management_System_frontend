import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DOCUMENT } from '@angular/common';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public url:any = "http://localhost:8080";
  private user: SocialUser;
  private loggedIn: boolean= false;
  private authenticationToken: String;



  constructor(private router:Router,private http: HttpClient,@Inject(DOCUMENT) readonly document: Document, private authService: AuthService) {
   }

   getAuthenticationToken(){
     return this.authenticationToken;
   }


   checkLoginStatus()
   {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.authenticationToken = this.user.authToken;
      console.log(this.loggedIn );
      console.log(this.user.authToken);
      this.redirectToAppropriatePage();
    });
   }

   redirectToAppropriatePage()
   {
     console.log("making get request");
     this.http.get(`${this.url}/user`).subscribe(
       (userLevel)=>{

          if( userLevel == "manager" || userLevel == "admin" )
              this.router.navigate(['/manager']);
          else{
              alert("Unauthorised user check the account you have logged in with");
              this.authService.signOut();
            }
                   
       },
       (error)=>{
        alert("Unauthorised user check the account you have logged in with");
        this.authService.signOut();
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
