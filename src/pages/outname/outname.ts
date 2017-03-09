import { Component } from '@angular/core';
import { NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { SmsService } from './../../providers/sms-service';
import { User } from './../../providers/user';
/*
/*
  Generated class for the Outname page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-outname',
  templateUrl: 'outname.html'
})
export class OutnamePage {
  profile: any;
  constructor(public navCtrl: NavController, public sms: SmsService, public userService: User, private platform: Platform, public alertCtrl:AlertController, menu: MenuController) {
    this.profile = this.userService.getCurrentUser();
  }

  ionViewDidLoad() {
    console.log('Hello OutnamePage Page');
  }

  saveNameOutput(number){
    if(this.profile['output'+number].name != null && this.profile['output'+number].name != undefined ){
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
          subTitle: 'Hubo un error tratando de cambiar tu pin, intenta nuevamente',
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
