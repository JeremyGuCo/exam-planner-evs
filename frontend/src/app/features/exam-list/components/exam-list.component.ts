import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../core/services/exam.service';
import { Exam } from '../../../core/models/exam.model';
import { StatusMappingService } from '../services/status-mapping.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];
  showAddExamDialog: boolean = false;

  constructor(
    private examService: ExamService,
    private statusMappingService: StatusMappingService
  ) { }

  ngOnInit(): void {
    this.loadExams();
  }

  /**
   * Loads the list of exams from the service
   */
  loadExams(): void {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

  /**
   * Handles the event when a new exam is added
   */
  onExamAdded(): void {
    this.loadExams();
  }

  /**
   * Opens the add exam dialog
   */
  openAddExamDialog(): void {
    this.showAddExamDialog = true;
  }

  /**
   * Closes the add exam
   */
  closeAddExamDialog(): void {
    this.showAddExamDialog = false;
  }

  /**
   * Gets the status information for a given status
   * @param status - The status to get information for
   * @returns The status informaton obje*ct
   */
  getStatusInfo(status: string) {
    return this.statusMappingService.getStatusInfo(status);
  }
}
