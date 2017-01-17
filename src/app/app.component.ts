import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { MenuTestePage } from '../pages/menu-teste/menu-teste';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';
import { ButtonPage } from '../pages/button/button';
import { CardsPage } from '../pages/cards/cards';
import { InputsPage } from '../pages/inputs/inputs';
import { ListPage } from '../pages/list/list';
import { ModalPage } from '../pages/modal/modal';
//import { ConnectionService } from './providers/connection-service/';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{ component: any, title: string, icon: string }>;
  rootPage = HomePage;

  constructor(platform: Platform) {

    this.pages = [
      { component: HomePage, title: 'Home', icon: 'home' },
      { component: MenuTestePage, title: 'Alerts', icon: 'alert' },
      { component: GeneratedTestPage, title: 'Ajax', icon: 'flash' },
      { component: ButtonPage, title: 'Button', icon: 'ios-radio-button-on' },
      { component: CardsPage, title: 'Cards', icon: 'browsers' },
      { component: InputsPage, title: 'Inputs', icon: 'code' },
      { component: ListPage, title: 'List', icon: 'list' },
      { component: ModalPage, title: 'Modal', icon: 'list' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

  }

  openPage(page: any): void {
    this.rootPage = page.component
  }
}
