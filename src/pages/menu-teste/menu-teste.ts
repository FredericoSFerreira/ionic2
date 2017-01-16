import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-menu-teste',
  templateUrl: 'menu-teste.html'
})
export class MenuTestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTestePage');
  }

  nome: string = 'Sem Nome';

  showAlert() {

    let alert = this.alertController.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.nome = data.title;
          }
        }
      ]

    })

    alert.present();

  }

}
