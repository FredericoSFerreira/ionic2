import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestePage } from '../pages/menu-teste/menu-teste';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';
import { ButtonPage } from '../pages/button/button';
import { CardsPage } from '../pages/cards/cards';
import { InputsPage } from '../pages/inputs/inputs';
import { ListPage } from '../pages/list/list';
import { ModalPage } from '../pages/modal/modal';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { NavegacaoPage } from '../pages/navegacao/navegacao';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeTabPage } from '../pages/home-tab/home-tab';
import { ContatoTabPage } from '../pages/contato-tab/contato-tab';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestePage,
    GeneratedTestPage,
    ButtonPage,
    CardsPage,
    InputsPage,
    ListPage,
    ModalPage,
    ModalLoginPage,
    NavegacaoPage,
    TabsPage,
    HomeTabPage,
    ContatoTabPage,
    ToastPage,
    ToolbarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestePage,
    GeneratedTestPage,
    ButtonPage,
    CardsPage,
    InputsPage,
    ListPage,
    ModalPage,
    ModalLoginPage,
    NavegacaoPage,
    TabsPage,
    HomeTabPage,
    ContatoTabPage,
    ToastPage,
    ToolbarPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
