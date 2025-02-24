import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam.model';
import { StatusMappingService } from '../services/status-mapping.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  exams: Exam[] = [];

  constructor(
    private examService: ExamService,
    private statusMappingService: StatusMappingService
  ) { }

  ngOnInit(): void {
    this.examService.getExams().subscribe(data => {
      this.exams = data.map((exam: Exam) => ({
        ...exam,
        status: exam.status.toLowerCase() in this.statusMappingService.statusMapping
          ? exam.status.toLowerCase()
          : 'searching',
        date: exam.date || 'En attente',
        time: exam.time || 'En attente',
        location: exam.location || 'En attente'
      }));
    });
  }

  getStatusInfo(status: string) {
    return this.statusMappingService.getStatusInfo(status);
  }
}
