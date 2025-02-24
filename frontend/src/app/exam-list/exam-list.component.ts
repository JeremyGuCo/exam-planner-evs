import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam.model';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  
  exams: Exam[] = [];

  constructor(private examService: ExamService) { }

  /**
   * Fetches the list of exams from the service.
   */
  ngOnInit(): void {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

}
