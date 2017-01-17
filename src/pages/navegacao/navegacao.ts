import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardsPage } from './../cards/cards';

/*
  Generated class for the Navegacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navegacao',
  templateUrl: 'navegacao.html'
})
export class NavegacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavegacaoPage');
  }

  public openPage() {

    this.navCtrl.push(CardsPage, {
      'msg': 'Ola'
    });

  }

}
