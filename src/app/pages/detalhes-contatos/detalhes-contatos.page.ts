import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})
export class DetalhesContatosPage implements OnInit {

  public contatoSelecionado : any
  public modoDeEdicao = false

  userForm : FormGroup

  constructor(
    private alertController: AlertController,
    private router : Router,
    private route : ActivatedRoute,
    private contato : DadosContatosService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0) {
      this.contatoSelecionado = this.contato.enviarDadosId(id)
    }else{
      this.contatoSelecionado = {id, nome: "", sobrenome: "", numero: "", tipo: "", email: ""}
      this.modoDeEdicao = true
    }
    this.userForm = this.formBuilder.group({
      nome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      numero: ['', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
      tipo: ['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.email,Validators.maxLength(50)])]
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deseja excluir este contato?',
      buttons: [
        {
          text: 'Sim',
          role: 'excluir',
          handler: () => {
            this.removerDado()
          }
          
        },

        {
          text: 'Não',
          role: 'cancelar'
        }
      ],
    });

    await alert.present();
  }

  async alertinha() {
    const alert = await this.alertController.create({
      header: 'Dados Incorretos',
      buttons: [
        {
          text: 'Retornar',
          role: 'excluir',
        }
      ],
    });

    await alert.present();
  }

  iniciarEdicao(){
    this.modoDeEdicao = true
  }

  encerrarEdicao() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (this.userForm.invalid || this.userForm.pending) {
      this.alertinha()
    }

    else {
      if (id > 0) {
        this.modoDeEdicao = false
      }
      else {
        this.contato.enviarTodosDados(this.contatoSelecionado)
        this.modoDeEdicao = false
        this.router.navigate(['/listagem-telefones/'])
      }
    }
  }

  removerDado() {
    this.contato.removeDado(this.contatoSelecionado)
    this.router.navigate(['/listagem-contatos/'])
  }

}
