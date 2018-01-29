import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';


@Injectable()
export class NavigationProxyProvider {

  public rootNav: NavController;
  public leftNav: NavController;
  public rightNav: NavController;

  constructor() {
    console.log('Hello NavigationProxyProvider Provider');
  }

}
