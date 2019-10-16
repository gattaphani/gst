import { Injectable } from '@angular/core';

import { HttpHeaders,HttpResponse, HttpEvent,HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
}






// import { Injectable }
// from '@angular/core';

// import { HttpHeaders,
// HttpResponse, HttpEvent,
// HttpInterceptor, HttpHandler,
// HttpRequest } from
// '@angular/common/http';

// import { AuthService }
// from './auth.service';

// import { Observable }
// import { TokenInterceptorService } from './../../../.history/src/app/services/token-interceptor.service_20190802111156';
from 'rxjs';



// @Injectable({

// providedIn: 'root'

// })



// export class
// TokenInterceptor implements
// HttpInterceptor {



// constructor(public
// auth: AuthService) { }



// intercept(request:
// HttpRequest<any>,
// next: HttpHandler):
// Observable<HttpEvent<any>> {



// request = request.clone({

// setHeaders: {

// Authorization: 
// ` ${this.auth.getToken()}`

// }

// })

// return next.handle(request);

// }

// }
