import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  workingLinks = [
    {link: 'https://www.tutorialsteacher.com/', title: 'Link 1'},
   {link: 'https://www.google.com/', title: 'Link 2'}, 
   {link: 'https://www.tutorialspoint.com', title: 'Link 3'}
  ];
  statusCodes = [
    {link: 'https://www.restapitutorial.com/httpstatuscodes.html', title: '200'},
   {link: 'https://www.restapitutorial.com/httpstatuscodes.html', title: '301'}, 
   {link: 'https://www.restapitutorial.com/httpstatuscodes.html', title: '404'},
   {link: 'https://www.restapitutorial.com/httpstatuscodes.html', title: '500'}
  ];
  getColor(index: number): string {
    if (index % 2 === 0) {
      return 'red';
    } else {
      return 'blue';
    }
  }
}
