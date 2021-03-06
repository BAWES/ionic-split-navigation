import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BuilderPage } from '../builder/builder';
import { ContactPage } from '../contact/contact';

import { NavigationProxyProvider } from '../../providers/navigation-proxy';

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
    private _menu: MenuController,
    private _navProxy: NavigationProxyProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');

    this._navProxy.leftNav = this.mainNav;
    this._navProxy.rightNav = this.secondaryNav;
  }

  contact(){
    this._menu.close();
    this.mainNav.push(ContactPage);
  }

  contact2(){
    this._menu.close();
    this.secondaryNav.push(ContactPage);
  }

}
