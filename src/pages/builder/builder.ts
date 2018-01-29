import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

import { NavigationProxyProvider } from '../../providers/navigation-proxy';

@Component({
  selector: 'page-builder',
  templateUrl: 'builder.html'
})
export class BuilderPage {

  constructor(public navCtrl: NavController, public navProxy: NavigationProxyProvider) {

  }

  contactPage(){
    this.navCtrl.push(ContactPage);
  }

  rootJob(){
    this.navProxy.rootNav.push(ContactPage);
  }

}
