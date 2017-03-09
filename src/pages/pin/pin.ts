import { Component } from '@angular/core';
import { NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { SmsService } from './../../providers/sms-service';
import { User } from './../../providers/user';

/*
  Generated class for the Pin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html'
})
export class PinPage {
  oldPin:any;
  newPin:any;
  constructor(public navCtrl: NavController, public sms: SmsService, public userService: User, private platform: Platform, public alertCtrl:AlertController, menu: MenuController) {

  }

  ionViewDidLoad() {
    console.log('Hello PinPage Page');
  }
  setPin(){
    if(this.oldPin && !isNaN(this.oldPin)){
      let user = this.userService.getCurrentUser();
      if(user.pin === this.oldPin){
        user.pin = this.newPin;
        this.sms.sendSMS(user.number, this.oldPin + " pin "+this.newPin, ()=>{
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'El PIN ha sido cambiado exitosamente',
            buttons: ['OK']
          });
          alert.present();
          this.userService.saveUser(user);
        },()=>{
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Hubo un error tratando de cambiar tu pin, intenta nuevamente',
            buttons: ['OK']
          });
          alert.present();
        });
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'El pin viejo ingresado no es correcto',
          buttons: ['OK']
        });
        alert.present();
      }
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'El pin viejo ingresado no es correcto',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
