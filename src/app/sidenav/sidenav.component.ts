import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  showEmployeeSubMenu = false;
  showMoreSubMenu = false;
  showSettingsSubMenu = false;

  toggleEmployeeSubMenu() {
    this.showEmployeeSubMenu = !this.showEmployeeSubMenu;
  }

  toggleMoreSubMenu() {
    this.showMoreSubMenu = !this.showMoreSubMenu;
  }

  toggleSettingsSubMenu() {
    this.showSettingsSubMenu = !this.showSettingsSubMenu;
  }

}
