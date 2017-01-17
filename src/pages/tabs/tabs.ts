import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeTabPage } from './../home-tab/home-tab';
import { ContatoTabPage } from './../contato-tab/contato-tab';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage: any = HomeTabPage;
  contatosPage: any = ContatoTabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
