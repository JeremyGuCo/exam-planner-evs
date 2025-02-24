import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAddExamDialog: boolean = false;

  openAddExamDialog(): void {
    this.showAddExamDialog = true;
  }

  closeAddExamDialog(): void {
    this.showAddExamDialog = false;
  }

  onExamAdded(): void {
    this.closeAddExamDialog();
  }
}
