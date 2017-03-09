import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Status page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StatusPage Page');
  }

}
