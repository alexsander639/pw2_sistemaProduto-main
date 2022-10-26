import { ProdutosCreateComponent } from './pages/produtos/produtos-create/produtos-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'produtos', children: [
    {path: '', component: ProdutosListComponent},
    {path: 'criar', component: ProdutosCreateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
