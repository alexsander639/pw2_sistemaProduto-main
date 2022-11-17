import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MessagesService } from '../../shared/messages.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';
export declare class LoginComponent implements OnInit {
    private readonly fb;
    private readonly messagesService;
    private readonly authenticationService;
    private readonly router;
    form: FormGroup;
    constructor(fb: FormBuilder, messagesService: MessagesService, authenticationService: AuthenticationService, router: Router);
    ngOnInit(): void;
    submit(): void;
}
