import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request)
    if (request.body== null) {
      this.router.navigate(['./footer'])
    }

    return next.handle(request)
      .pipe(
        catchError((responce: HttpErrorResponse) => {
          if (responce.status == 404) {
            console.log(responce.status)
            this.router.navigate(['./head'])
          }
          return throwError(responce);
        })
      )
  }
}

