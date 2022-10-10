import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listagem-contatos',
    loadChildren: () => import('./pages/listagem-contatos/listagem-contatos.module').then( m => m.ListagemContatosPageModule)
  },
  {
    path: 'detalhes-contatos/:id',
    loadChildren: () => import('./pages/detalhes-contatos/detalhes-contatos.module').then( m => m.DetalhesContatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
