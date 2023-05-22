import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
  data = [
    {
      title: 'Single Menus',
      menus: [
        { title: 'Testing', submenus: [] },
        { title: 'Java', submenus: [] },
        { title: '.Net', submenus: [] },
        { title: 'Database', submenus: [] }
      ],
    },
    {
      title: 'Sub Menus',
      menus: [
        { title: 'Testing', submenus: ['Java', 'JavaScript', 'Python', 'CSharp'] },
        { title: 'Java', submenus: ['Java', 'JavaScript', 'Python', 'CSharp'] },
        { title: '.Net', submenus: ['Java', 'JavaScript', 'Python', 'CSharp'] },
        { title: 'Database', submenus: ['Java', 'JavaScript', 'Python', 'CSharp'] }
      ],
    }
  ];

  selectedMenu: string = '';
  selectedMenuSubmenus: string[] = [];

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.selectedMenuSubmenus = [];
  }

  showSubmenus(menu: { title: string, submenus: string[] }) {
    this.selectedMenu = menu.title;
    this.selectedMenuSubmenus = menu.submenus;
  }
}
