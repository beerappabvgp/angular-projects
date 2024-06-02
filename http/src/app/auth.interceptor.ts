import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedrequest = req.clone({
        headers : req.headers.set('Authorization' , 'bearer-your-token'),
      });
      return next.handle(clonedrequest);
  }
} 

// this is what i have been doing it so far 

