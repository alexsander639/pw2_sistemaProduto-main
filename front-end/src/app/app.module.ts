import { JsonDateInterceptor } from './interceptors/json-date.interceptor';
import { JwtAuthInterceptor } from './interceptors/jwt-auth.interceptor';
import { ProdutosCreateComponent } from './pages/produtos/produtos-create/produtos-create.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedDirective } from './directives/red.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsuariosCreateComponent } from './pages/usuarios/usuarios-create/usuarios-create/usuarios-create.component';
import { ProdutosEditComponent } from './pages/produtos/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './pages/produtos/produtos-delete/produtos-delete.component';
import { PageComponent } from './layout/page/page.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, RedDirective, NavComponent, HomeComponent, ProdutosListComponent, ProdutosCreateComponent, UsuariosCreateComponent, ProdutosEditComponent, ProdutosDeleteComponent, PageComponent, LoginComponent],
  imports: [
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
