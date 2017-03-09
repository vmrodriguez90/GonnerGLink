import { Component } from '@angular/core';
import { NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { SmsService } from './../../providers/sms-service';
import { User } from './../../providers/user';
import {HomePage} from './../home/home';

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
  currentUser: any = null;
  outputs: any = [];
  constructor(public navCtrl: NavController, public sms: SmsService, public userService: User, private platform: Platform, public alertCtrl:AlertController, menu: MenuController) {
    menu.enable(true);

  }

  ionViewDidLoad() {
    this.userService.init(()=>{
      console.log('init');
      this.currentUser = this.userService.getCurrentUser();

      if(this.currentUser !== null){
        console.log(this.currentUser);
        this.outputs = [];
        for(let i=0; i< 4; i++){
          this.currentUser['output'+i] = this.currentUser['output'+i] || { name: 'Salida '+( i + 1 ), value:'salida'+(i+1) };
          this.outputs.push(this.currentUser['output'+i])
        }
        console.log(this.outputs);
        this.userService.saveUser(this.currentUser);
      }
      else {
        this.navCtrl.push(HomePage);
      }
    });
  }
  activate(output){
    this.sms.sendSMS(this.currentUser.number, this.currentUser.pin + ' '+output+' activo', ()=>{
      let alert = this.alertCtrl.create({
        title: 'Correcto',
        subTitle: 'El mensaje para activar la Salida '+output+' se ha enviado exitosamente',
        buttons: ['OK']
      });
      alert.present();
      this.userService.saveUser(this.currentUser);
    },()=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Error al enviar el SMS. Verifique su saldo, o contactese con el administrador',
        buttons: ['OK']
      });
      alert.present();
    });
  }
  deactivate(output){
    this.sms.sendSMS(this.currentUser.number, this.currentUser.pin + ' '+output+' desactivo', ()=>{
      let alert = this.alertCtrl.create({
        title: 'Correcto',
        subTitle: 'El mensaje para activar la Salida '+output+' se ha enviado exitosamente',
        buttons: ['OK']
      });
      alert.present();
      this.userService.saveUser(this.currentUser);
    },()=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Error al enviar el SMS. Verifique su saldo, o contactese con el administrador',
        buttons: ['OK']
      });
      alert.present();
    });
  }
}
