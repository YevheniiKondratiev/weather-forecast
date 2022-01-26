import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

export class ErrorIntercept implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.warn(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
}
