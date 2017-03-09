import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Diagnostic} from 'ionic-native';

declare var window: any;

@Injectable()
export class SmsService {
  public sms:any;
  constructor(private platform:Platform) {
    this.platform.ready().then(()=> {
      Diagnostic.requestRuntimePermissions(Diagnostic.permissionGroups.SMS).then(()=>{
        if(window.SMS){
          this.sms = window.SMS;
        }
        else {
          console.log(window.SMS);
          console.log(window);
          this.sms = {};
        }
      });
    });
  }

  sendSMS(number, text, success, error){
    Diagnostic.getPermissionsAuthorizationStatus(Diagnostic.permissionGroups.SMS).then((status)=>{
      if(status !== 'GRANTED'){
        this.sms.sendSMS(number.toString(), text, ()=>{
          this.sms.startWatch(()=> {
            this.sms.enableIntercept(true, ()=> {
              window.document.addEventListener('onSMSArrive', (e)=>{
                let sms = e.data;
                console.log(e);
                if(sms.address.indexOf(number.toString()) !== -1){
                  this.sms.enableIntercept(false, ()=> {
                    success({number: sms.address, message: sms.body, time: sms.date });
                  }, error);
                }
              });
            },error);
          }, error);
        }, error);
      }
    });
  }
}
