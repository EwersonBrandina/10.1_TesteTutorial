import { Component, OnInit } from '@angular/core';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';

@Component({
  selector: 'app-listagem-contatos',
  templateUrl: './listagem-contatos.page.html',
  styleUrls: ['./listagem-contatos.page.scss'],
})
export class ListagemContatosPage implements OnInit {

  public todosDados : any

  constructor(private dados : DadosContatosService) {
    this.todosDados = this.dados.enviarDados()
  }

  ngOnInit() {
  }

}
