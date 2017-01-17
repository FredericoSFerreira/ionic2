import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLoginPage {

  usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  //Envia  os dados para seream acessados por outra pagina
  entrar() {

    this.view.dismiss(this.usuario);

  }

  fechar() {
    this.view.dismiss();
  }

}
