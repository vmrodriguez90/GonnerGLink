import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Inname page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inname',
  templateUrl: 'inname.html'
})
export class InnamePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InnamePage Page');
  }

}
