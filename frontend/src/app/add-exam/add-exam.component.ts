import { Component, EventEmitter, Output } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent {
  examForm: FormGroup;
  errorMessage: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() examAdded = new EventEmitter<void>();


  constructor(private examService: ExamService, private fb: FormBuilder) {
    this.examForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: [''],
      status: ['A organiser']
    });
  }

  /**
   * Converts form values to the expected backend format
   * @returns The formatted exam data
   */
  private formatExamData(): any {
    const formValues = this.examForm.value;

    return {
      student: {
        first_name: formValues.firstName,
        last_name: formValues.lastName
      },
      meeting_point: formValues.location || '',
      date: this.combineDateTime(formValues.date, formValues.time),
      status: formValues.status
    };
  }

  /**
   * Combines date and time inputs into a valid timestamp
   * @param date - The date string
   * @param time - The time string
   * @returns The combinedtimestamp
   */
  private combineDateTime(date: string, time: string): string {
    return new Date(`${date}T${time}:00Z`).toISOString();
  }

  /**
   * Submits the form to add a new exam
   */
  onSubmit(): void {
    if (this.examForm.valid) {
      const formattedExam = this.formatExamData();
      this.examService.addExam(formattedExam).pipe(
        catchError(error => {
          console.error("Error adding exam:", error);
          this.errorMessage = "Erreur lors de l'ajout de l'examen. Veuillez réessayer.";
          return of(null);
        })
      ).subscribe(() => {
        this.close.emit();
        this.examAdded.emit();
        this.errorMessage = '';
      });
    } else {
      this.errorMessage = "Veuillez remplir tous les champs obligatoires.";
    }
  }

  /**
   * Cancels the form without submitting
   */
  onCancel(): void {
    this.close.emit();
    this.errorMessage = '';
  }
}
