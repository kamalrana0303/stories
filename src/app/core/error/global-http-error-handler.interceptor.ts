import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, Observable, retry, throwError, timer } from 'rxjs';

@Injectable()
export class GlobalHttpErrorHandlerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(req).pipe(retry({
            count: 1,
            delay: (_,retryCount)=> timer(retryCount*1000)
        }), 
        catchError(err=> {
        
            if(err.status ===401){

            }
            console.log('Error handled by Http Interceptory');
            return throwError(()=> {
                console.log(err);
                return err;
            })
        }));
    }
}