import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Property to control the display of the add exam form
  showAddExamDialog = false;

  /**
   * Opens the add form
   */
  openAddExamDialog(): void {
    this.showAddExamDialog = true;
  }

  /**
   * Closes the add form
   */
  closeAddExamDialog(): void {
    this.showAddExamDialog = false;
  }
}
