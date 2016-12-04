import { Component } from '@angular/core';

import { ControlPage } from '../control/control';
import { ProfilePage } from '../profile/profile';
import { ConfigurationPage } from '../configuration/configuration';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ControlPage;
  tab2Root: any = ProfilePage;
  tab3Root: any = ConfigurationPage;

  constructor() {

  }
}
