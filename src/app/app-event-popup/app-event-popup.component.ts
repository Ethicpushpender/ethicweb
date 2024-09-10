import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-event-popup',
  templateUrl: './app-event-popup.component.html',
  styleUrls: ['./app-event-popup.component.css']
})
export class AppEventPopupComponent {
  isVisible: boolean = true; // Initialize the popup visibility

  
  closePopup(): void {
    this.isVisible = false; // Close popup on button click
  }
}
