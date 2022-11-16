import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { UsuariosService } from '../../usuarios.service';
import { Usuario } from '../../../../models/usuarios.model';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.scss']
})
export class UsuariosCreateComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  roleDisponivel: String[] = ['pf', 'pj'];

  constructor(private readonly router: Router,
    private readonly usuariosService: UsuariosService,
    private readonly fb: FormBuilder) { }

    ngOnInit(): void {
      //this.usuariosService.list().subscribe((res) => this.produtos = res);

      this.form = this.fb.group({
        email:[null, [Validators.required]],
        name: [null, [Validators.required]],
        role: [null, [Validators.required]],
        password: [null, [Validators.required]],
      });
    }

    create():void {
      this.form.markAllAsTouched();

      if(this.form.valid){
        const usuario: Usuario = this.form.value;

        console.log(usuario);

        this.usuariosService.create(usuario)
        .pipe(catchError(error => {
          this.usuariosService.showMessage('Usuário não pode ser cadastrado!', true);
          return error;
        }))
        .subscribe(resp => {
          this.usuariosService.showMessage('Usuário cadastrado com sucesso!');
          this.router.navigate(['/users']);
        });
      }else{
        this.usuariosService.showMessage('Preencha os campos obrigatórios!', true);
      }
    }

    cancel():void {
      this.router.navigate(['/users']);
    }

}
