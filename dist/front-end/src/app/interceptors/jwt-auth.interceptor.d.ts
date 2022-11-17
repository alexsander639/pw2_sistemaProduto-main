import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';
import { MessagesService } from '../shared/messages.service';
export declare class JwtAuthInterceptor implements HttpInterceptor {
    private readonly authenticationService;
    private readonly messagesService;
    constructor(authenticationService: AuthenticationService, messagesService: MessagesService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
}
