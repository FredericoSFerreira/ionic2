import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html',
  providers: [ConnectionService]
})
export class GeneratedTestPage {

  items: Array<{ cidade: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ConnectionService: ConnectionService) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTestPage');
  }



  itemSelected(item: any): void {

    console.log(item.id);


    this.ConnectionService.getCep2(item.id).then((resp) => {
      let json = resp.json();
      console.log(json)
    }).catch((erro) => {
      console.log(erro);
    })




  }


  buscarCep(): void {

    this.ConnectionService.getCep().then((resp) => {
      let json = resp.json();
      console.log(json)

      this.items = json;



    }).catch((erro) => {
      console.log(erro);
    })

  }

}
