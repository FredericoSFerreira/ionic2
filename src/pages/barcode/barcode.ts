import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the Barcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  barCodeData: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  scan() {

    BarcodeScanner.scan().then((barcodeData) => {

      this.barCodeData = barcodeData;

    }, (err) => {
      console.log(err);
    });

  }

}
