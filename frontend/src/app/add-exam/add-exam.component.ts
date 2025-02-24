import { Component, EventEmitter, Output } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';

/**
 * Component to add a new exam.
 */
@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent {
  examForm: FormGroup;
  errorMessage: string = '';
  @Output() close = new EventEmitter<void>();

  /**
*
   * @param examService - The service to interact with API
   * @param fb - FormBuilder to create the form
   */
  constructor(private examService: ExamService, private fb: FormBuilder) {
    this.examForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      status: ['En attente']
    });
  }

  /**
   * Submits the form to add a new exam
   */
  onSubmit(): void {
    if (this.examForm.valid) {
      const examInput: Exam = this.examForm.value;
      this.examService.addExam(examInput).pipe(
        catchError(error => {
          this.errorMessage = "Erreur lors de l'ajout de l'examen. Veuillez réessayer.";
          return of(null);
        })
      ).subscribe(() => {
        this.close.emit();
        this.errorMessage = '';
      });
    } else {
      this.errorMessage = "Veuillez remplir tous les champs obligatoires.";
    }
  }

  /**
   * Cancels the form without submitting.
   */
  onCancel(): void {
    this.close.emit();
    this.errorMessage = '';
  }
}
