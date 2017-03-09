import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {ControlPage} from './../pages/control/control';
import {LinkPage} from './../pages/link/link';
import {PinPage} from './../pages/pin/pin';
import {ReportInputPage} from './../pages/report-input/report-input';
import {TimeInputPage} from './../pages/time-input/time-input';
import {TelephonePage} from './../pages/telephone/telephone';
import {ProfilePage } from './../pages/profile/profile';
import {TimeOutputPage} from './../pages/time-output/time-output';
import {ReportOutputPage} from './../pages/report-output/report-output';
import {StatusPage} from './../pages/status/status';
import {InnamePage} from './../pages/inname/inname';
import {OutnamePage} from './../pages/outname/outname';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(NavController) navCtrl;
  rootPage: any = ControlPage;
  pages: any;
  constructor(platform: Platform) {
    this.pages = [
      { title: 'Control', component: ControlPage, icon:'keypad' },
      { title: 'Vincular E/S', component: LinkPage, icon:'link' },
      { title: 'Cambiar PIN', component: PinPage, icon: 'lock' },
      { title: 'Cambiar Nombre de Entradas', component: InnamePage, icon: 'information-circle' },
      { title: 'Cambiar Nombre de Salidas', component: OutnamePage, icon: 'information-circle' },
      { title: 'Cambiar Telefonos', component: TelephonePage, icon:'call' },
      { title: 'Cambiar Tiempo de Estim. Entrada', component: TimeInputPage, icon:'clock' },
      { title: 'Cambiar Tiempo Activo de Salida', component: TimeOutputPage, icon: 'clock' },
      { title: 'Perfiles', component: ProfilePage, icon:'contact' },
      { title: 'Reporte de Act. Entradas', component: ReportInputPage, icon:'cog' },
      { title: 'Reporte de Act. Salidas', component: ReportOutputPage, icon:'cog' },
      { title: 'Estado', component: StatusPage, icon:'pulse' },
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
}
