import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {

  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

  entrar() {

    let texto = ('Login: ' + this.usuario + ' Senha:' + this.senha)
    let alert = this.alertCtrl.create({
      title: 'Entrando...',
      message: texto,
      //buttons: ['OK']
    });
    alert.present();
  }

}
