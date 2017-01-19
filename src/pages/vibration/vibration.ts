import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from 'ionic-native';

/*
  Generated class for the Vibration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html'
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }


  vibrar() {

    Vibration.vibrate(3000);

  }

}
