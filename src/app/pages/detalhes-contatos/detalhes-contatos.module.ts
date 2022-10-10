import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesContatosPageRoutingModule } from './detalhes-contatos-routing.module';

import { DetalhesContatosPage } from './detalhes-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesContatosPageRoutingModule
  ],
  declarations: [DetalhesContatosPage]
})
export class DetalhesContatosPageModule {}
