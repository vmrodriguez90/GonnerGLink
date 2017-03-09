import { Component } from '@angular/core';
import { NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { SmsService } from './../../providers/sms-service';
import { User } from './../../providers/user';
/*
  Generated class for the Telephone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-telephone',
  templateUrl: 'telephone.html'
})
export class TelephonePage {
  profile: any;
  constructor(public navCtrl: NavController, public sms: SmsService, public userService: User, private platform: Platform, public alertCtrl:AlertController, menu: MenuController) {
    this.profile = this.userService.getCurrentUser();
  }

  ionViewDidLoad() {
    console.log('Hello TelephonePage Page');
  }
  saveTel(number){
    if(!isNaN(this.profile['tel'+number])){
      let user = this.userService.getCurrentUser();
      this.sms.sendSMS(user.number, user.pin + " tel"+ number + " "+this.profile['tel'+number], ()=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'El Telefono '+ number+' ha sido cambiado exitosamente',
          buttons: ['OK']
        });
        alert.present();
        user['tel'+number] = this.profile['tel'+number];
        this.userService.saveUser(user);
      },()=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Hubo un error tratando de cambiar su telefono, intenta nuevamente',
          buttons: ['OK']
        });
        alert.present();
      });
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'El telefono ingresado no es correcto',
        buttons: ['OK']
      });
      alert.present();
    }
  }


}
