import { Component } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent {
  popups = [
    { title: 'Popup One', handler: this.openGoogle },
    { title: 'Popup Two', handler: this.openTutorialPoint },
    { title: 'Popup Three', handler: this.openTutorialPointTeacher },
    { title: 'Popup Duplicate', handler: this.openDuplicate },
    { title: 'Duplicate Tab', handler: this.openDuplicateTab },
    { title: 'In window popup', handler: this.openInWindowPopUp },
    { title: 'Alert Box', handler: this.openAlertBox },
    { title: 'Confirm Box', handler: this.openConfirmBox },
    { title: 'Prompt Box', handler: this.openPromptBox }
  ];

  openGoogle() {
    window.open('https://www.google.com', '_blank', 'width=600,height=400');
  }

  openTutorialPoint() {
    window.open('https://www.tutorialspoint.com', '_blank', 'width=600,height=400');
  }

  openTutorialPointTeacher() {
    window.open('https://www.tutorialsteacher.com', '_blank');
  }

  openDuplicate() {
    window.open('https://www.javatpoint.com/java-tutorial', '_blank', 'width=600,height=400');
  }

  openPromptBox() {
    window.prompt('This is Prompt Box');
  }

  openConfirmBox() {
    window.confirm('This is Confirm Box');
  }

  openAlertBox() {
    window.alert('This is alert Box');
  }

  openInWindowPopUp() {
    window.alert('Not Implemented yet.....');
  }

  openDuplicateTab() {
    window.open(window.location.href, '_blank');
  }
}
