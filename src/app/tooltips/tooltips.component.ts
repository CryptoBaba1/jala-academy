import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {

  toolTip = "You didn't click on the button. Please click the button to check the tooltip.";

  toolTipChanged(): void {
    this.toolTip = "You clicked on the button.";
  }

}
