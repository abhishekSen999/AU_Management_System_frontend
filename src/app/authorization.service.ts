import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public url:any = "http://localhost:8080";



  constructor(private httpClient: HttpClient,@Inject(DOCUMENT) readonly document: Document) {
   }

   get window(): Window { return this.document.defaultView; }



   checkServerStatus(){
    
    
    
    
  }
   
   getAuthorizationlevel(){
    console.log("authorization level");
    const urlExtensionLogin = this.url+"/user";
    // const redirectionUrl = this.url+"/oauth2/authorization/google"; //learn to get redirection location from observable

    return this.httpClient.get(urlExtensionLogin);

    
   }

   redirect(url: string, target = '_blank'): Promise<boolean> {
     
    return new Promise<boolean>( (resolve, reject) => {
      
     try { resolve(!!this.window.open(url, target)); }
     catch(e) { reject(e); }
  });
}


}
