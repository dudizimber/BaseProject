import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { switchMap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.auth.getToken().pipe(
      switchMap((token) => {
        if (token) {
          // Clone the request and replace the original headers with
          // cloned headers, updated with the authorization.
          const authReq = req.clone({
            headers: req.headers.set('Authorization', token),
          });

          // send cloned request with header to the next handler.
          return next.handle(authReq);
        }

        return next.handle(req);
      })
    );
  }
}
