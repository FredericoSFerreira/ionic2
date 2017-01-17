import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/*
  Generated class for the Toast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html'
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Alerta foi enviado com sucesso',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "OK",
      position: "bottom"
    });
    toast.present();

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

  }

}
