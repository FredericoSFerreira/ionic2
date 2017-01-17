import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';

/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  openModal() {
    console.log('here');
    let modal = this.modalCtrl.create(ModalLoginPage);
    //Pega os dados da outra pagina
    modal.onDidDismiss((param) => {
      console.log(param);
    })
    modal.present();
  }
}
