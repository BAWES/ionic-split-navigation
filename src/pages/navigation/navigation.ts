import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BuilderPage } from '../builder/builder';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  rootPage = HomePage;
  secondaryPage = BuilderPage;

  @ViewChild('leftNavStack') mainNav: NavController
  @ViewChild('rightNavStack') secondaryNav: NavController

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _menu: MenuController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  contact(){
    this._menu.close();
    this.mainNav.push(ContactPage);
  }

}
