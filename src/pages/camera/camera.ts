import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {


  imagem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  tirarFoto() {

    Camera.getPicture(
      {
        quality: 100,
        cameraDirection: Camera.Direction.FRONT,
        destinationType: Camera.DestinationType.DATA_URL
      }
    ).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.imagem = base64Image

    }, (err) => {
      console.log(err)
    });

  }

}
