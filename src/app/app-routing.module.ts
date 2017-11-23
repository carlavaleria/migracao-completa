import { ListarComponent } from './listar/listar.component';
import { AdicionarComponent } from 'app/adicionar/adicionar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{
    //path: '',
    //children: []
  //}
  { path: 'adicionar', component:AdicionarComponent},
  { path: 'listar', component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
