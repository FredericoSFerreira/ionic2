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
import { NavegacaoPage } from '../pages/navegacao/navegacao';
import { TabsPage } from '../pages/tabs/tabs';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { CameraPage } from '../pages/camera/camera';
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
      { component: ModalPage, title: 'Modal', icon: 'list' },
      { component: NavegacaoPage, title: 'Navegacao', icon: 'list' },
      { component: TabsPage, title: 'Tabs', icon: 'list' },
      { component: ToastPage, title: 'Toast', icon: 'list' },
      { component: ToolbarPage, title: 'Toolbar', icon: 'list' },
      { component: CameraPage, title: 'Camera', icon: 'photo' }
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
