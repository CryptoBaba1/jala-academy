import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openHomePage: boolean = false;
  loginSuccess(): void {
    this.openHomePage = true;
  }
  logOut(): void {
    this.openHomePage = false;
  }
  title = 'jala-academy';
}
