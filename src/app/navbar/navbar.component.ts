import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {}
  @Output() logOut = new EventEmitter<string>();

  logout() {
    this.logOut.emit('logout');
    this.router.navigate(['/login']);
  }

}
