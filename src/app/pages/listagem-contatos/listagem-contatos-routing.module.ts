import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemContatosPage } from './listagem-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemContatosPageRoutingModule {}
