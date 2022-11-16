import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../usuarios.service';
export declare class UsuariosCreateComponent implements OnInit {
    private readonly router;
    private readonly usuariosService;
    private readonly fb;
    form: FormGroup;
    roleDisponivel: String[];
    constructor(router: Router, usuariosService: UsuariosService, fb: FormBuilder);
    ngOnInit(): void;
    create(): void;
    cancel(): void;
}
