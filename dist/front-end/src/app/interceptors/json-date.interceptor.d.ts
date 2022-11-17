import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class JsonDateInterceptor implements HttpInterceptor {
    private _isoDateFormat;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private _adjustTimezone;
    private _convertBodyRequest;
    private _convertBodyResponse;
    private _convertParamsRequest;
    private _isIsoDateString;
}
