import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header'
    },

    {
      title: 'Loan Application',
      icon: 'fas fa-inr',
      active: false,
      type: 'simple',
      url: '/app-loan-application',
      badge: {
        text: '3',
        class: 'badge-danger'
      }
    },{
      title: 'Loan Information',
      icon: 'fa fa-inr',
      active: false,
      type: 'simple',
      url: '/app-loan-information',
      badge: {
        text: '3',
        class: 'badge-danger'
      }
    },
    {
      title: 'Loan Estimate',
      icon: 'fa fa-inr',
      active: false,
      type: 'simple',
      url: '/app-loan-estimate',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
    },
      {
      title: 'Loan Package',
      icon: 'fa fa-inr',
      active: false,
      type: 'simple',
      url: '/app-loan-package',
      badge: {
        text: '3',
        class: 'badge-danger'
      }
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
