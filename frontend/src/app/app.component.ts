import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAddExamDialog: boolean = false;
  /**
   * Opens the dialog to add a new exam.
   */
  openAddExamDialog(): void {
    this.showAddExamDialog = true;
  }
  /**
   * Closes the dialog to add a new exam.
   */
  closeAddExamDialog(): void {
    this.showAddExamDialog = false;
  }
  /**
   * Handles the event when a new exam is added.
   */
  onExamAdded(): void {
    this.closeAddExamDialog();
  }
}
