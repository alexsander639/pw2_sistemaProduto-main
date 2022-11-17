import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosEditComponent } from './pages/produtos/produtos-edit/produtos-edit.component';
import { UsuariosCreateComponent } from './pages/usuarios/usuarios-create/usuarios-create/usuarios-create.component';
import { ProdutosCreateComponent } from './pages/produtos/produtos-create/produtos-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { PageComponent } from './layout/page/page.component';

const routes: Routes = [
  {path:'users', children: [
    {path: 'criar', component: UsuariosCreateComponent},
  ]},
  {path:'login', component: LoginComponent},
  {path: '', component: PageComponent,
  canActivate: [AuthenticationGuard],
  canActivateChild: [AuthenticationGuard],
  children: [
    {path:'', component: HomeComponent},
    {path:'produtos', children: [
      {path: '', component: ProdutosListComponent},
      {path: 'criar', component: ProdutosCreateComponent},
      {path: ':id/edit', component: ProdutosEditComponent}
    ]},
    {path:'users', children: [
      {path: '', component: ProdutosListComponent},
    ]}
  ],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
