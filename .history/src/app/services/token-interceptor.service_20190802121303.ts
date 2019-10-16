import { Injectable } from '@angular/core';

import { HttpHeaders,HttpResponse, HttpEvent,HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable }from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth:AuthService) { }

 intercept(request:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


request = request.clone({

setHeaders: {

 Authorization:` ${this.auth.getToken()}`

 }

 })
 debugger;
return next.handle(request);

 }

}




