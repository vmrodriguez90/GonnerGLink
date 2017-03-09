import { Component } from '@angular/core';
import { NavController, Platform, AlertController, ViewController, MenuController } from 'ionic-angular';
import { SmsService } from './../../providers/sms-service';
import { User } from './../../providers/user';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: any;
  step = 1;
  maxSteps = 10;
  showLoading: any;
  oldPin:any;
  newPin:any;
  constructor(public navCtrl: NavController, public sms: SmsService, public userService: User, private platform: Platform, public alertCtrl:AlertController, menu: MenuController, private viewCtrl: ViewController) {
    this.showLoading = false;
    menu.enable(false);
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
  }

  setConfig(){
    let self = this;
    if(this.isModelOk()){
      console.log('The Model is Ok, and saved');
      if(this.platform.is('cordova')){
        this.showLoading = true;
        this.sms.sendSMS(this.profile.number, this.profile.pin + " resetear", (success) => {
          self.showLoading = false;
        }, (error) => {
          console.log(error);
          this.setConfig();
        });
      }
    }
    else {
      this.prevStep();
    }
  }

  isModelOk(){
    if(this.profile.number && this.profile.pin && this.profile.name){
      this.profile.current = true;
      console.log('Savning new User');
      this.userService.saveUser(this.profile);
      return true;
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Para continuar complete los datos correctamente',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  prevStep(){
    if(this.step !== 0){
      this.step--;
    }
  }
  nextStep(){
    if(this.step !== this.maxSteps){
      this.step++;
    }
    if(this.step === 3){
      this.setConfig();
    }
    if(this.step === 5){
      this.skipConfig();
    }
  }
  //initial configurations

  setPin(){
    if(this.oldPin && !isNaN(this.oldPin)){
      let user = this.userService.getCurrentUser();
      if(user.pin === this.oldPin){
        user.pin = this.newPin;
        this.sms.sendSMS(user.number, this.oldPin + " pin "+this.newPin, ()=>{
          let alert = this.alertCtrl.create({
            title: 'Correcto',
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
  saveTel(number){
    if(!isNaN(this.profile['tel'+number])){
      let user = this.userService.getCurrentUser();
      this.sms.sendSMS(user.number, user.pin + " tel"+ number + " "+this.profile['tel'+number], ()=>{
        let alert = this.alertCtrl.create({
          title: 'Correcto',
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


  skipConfig(){
    this.navCtrl.pop();
  }

}
