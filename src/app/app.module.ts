import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ProfilePage } from '../pages/profile/profile';
import { ControlPage } from '../pages/control/control';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


declare var window: any;

@NgModule({
  declarations: [
    MyApp,
    ConfigurationPage,
    ProfilePage,
    ControlPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigurationPage,
    ProfilePage,
    ControlPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
