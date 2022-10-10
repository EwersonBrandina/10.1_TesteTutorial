import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosContatosService {


  private contatos= [
    {id: 1, nome: 'Bruna', sobrenome:'Bianca', numero: '99999-9999', tipo:'Celular', email: 'bruna@gmail.com'},
    {id: 2, nome: 'Ewerson', sobrenome:'Brandina', numero:'88888-8888', tipo:'Celular', email: 'ewerson@gmail.com'}
   ]

  constructor() { }

   enviarDados(){
    return this.contatos
   }

  enviarTodosDados(dadosRecebidos : any){
    dadosRecebidos.id = Math.max(this.contatos.length)
    this.contatos.push(dadosRecebidos)
  }

  enviarDadosId(id: number){
    const contatoSelecionado = this.contatos.filter(contato => contato.id === id)
    return contatoSelecionado [0]
  }

  removeDado(
    dadosRecebidos : any
    ) {
      this.contatos.splice(this.contatos.indexOf(dadosRecebidos), 1)
    }
  
}
