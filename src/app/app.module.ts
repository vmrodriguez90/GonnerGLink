import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {SmsService} from "./../providers/sms-service";
import {User} from "./../providers/user";
import {ControlPage} from "./../pages/control/control";
import {LinkPage} from "./../pages/link/link";
import {PinPage} from "./../pages/pin/pin";
import {ReportInputPage} from "./../pages/report-input/report-input";
import {TimeInputPage} from "./../pages/time-input/time-input";
import {TelephonePage} from "./../pages/telephone/telephone";
import {ProfilePage} from "./../pages/profile/profile";
import {TimeOutputPage} from "./../pages/time-output/time-output";
import {ReportOutputPage} from "./../pages/report-output/report-output";
import {StatusPage} from "./../pages/status/status";
import {InnamePage} from "./../pages/inname/inname";
import {OutnamePage} from "./../pages/outname/outname";
import {MaterialModule} from "@angular/material";
import {HomePage} from "./../pages/home/home";
import {IonicStorageModule} from "@ionic/storage";


declare var window:any;

@NgModule({
  declarations: [
    MyApp,
    ControlPage,
    HomePage,
    LinkPage,
    PinPage,
    ReportInputPage,
    ReportOutputPage,
    TimeInputPage,
    TimeOutputPage,
    TelephonePage,
    StatusPage,
    ProfilePage,
    OutnamePage,
    InnamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MaterialModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ControlPage,
    LinkPage,
    PinPage,
    ReportInputPage,
    ReportOutputPage,
    TimeInputPage,
    TimeOutputPage,
    TelephonePage,
    StatusPage,
    ProfilePage,
    OutnamePage,
    InnamePage
  ],
  providers: [
    SmsService,
    User
  ]
})
export class AppModule {
}
