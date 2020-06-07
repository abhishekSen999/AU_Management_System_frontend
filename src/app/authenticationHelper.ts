import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';



@Injectable()
export class AuthenticationHelper implements HttpInterceptor{

    constructor(private authorizationService: AuthorizationService){}

    intercept(request: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let idToken = this.authorizationService.getIdToken();
        console.log(" get request intercepted ");
        // console.log(`Bearer ${idToken}`);
        request = request.clone({
            setHeaders: {
                
                Authorization: `${idToken}`
            }
        });
        return next.handle(request);
    }
}