import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Control page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-control',
  templateUrl: 'control.html'
})
export class ControlPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ControlPage Page');
  }

}
