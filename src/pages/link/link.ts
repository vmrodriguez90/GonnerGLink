import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Link page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-link',
  templateUrl: 'link.html'
})
export class LinkPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LinkPage Page');
  }

}
