import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-builder',
  templateUrl: 'builder.html'
})
export class BuilderPage {

  constructor(public navCtrl: NavController) {

  }

  contactPage(){
    this.navCtrl.push(ContactPage);
  }

}
