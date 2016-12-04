import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


declare var window: any;

@Injectable()
export class SmsService {
  SMS: any;
  constructor() {
    this.SMS = window.SMS;
  }

  sendSMS(){

  }
  

}
