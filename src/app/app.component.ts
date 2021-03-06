import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavigationPage } from '../pages/navigation/navigation';

import { NavigationProxyProvider } from '../providers/navigation-proxy';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('rootNav') rootNav: NavController;

  rootPage:any = NavigationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _navProxy: NavigationProxyProvider) {

    platform.ready().then(() => {
      // Set root nav in navproxy
      this._navProxy.rootNav = this.rootNav;

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
