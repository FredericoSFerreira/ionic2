import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ConnectionService]
})
export class ListPage {

  fotos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ConnectionService: ConnectionService) {

    this.buscarFotos()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  buscarFotos(): void {

    this.ConnectionService.getFotos().then((resp) => {
      let json = resp.json();
      console.log(json)

      this.fotos = json;

    }).catch((erro) => {
      console.log(erro);
    })

  }

}
