import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from 'ionic-native';
import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {

  connectionType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }


  check() {
    this.connectionType = Network.type;

    LocalNotifications.schedule({
      id: 1,
      title: 'Novo Alerta na cidade',
      text: 'Alerta gerado no app',
      data: { secret: 'Ola' }
    });
  }

}
