import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exam, ExamApi } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of exams from the backend.
   * @returns Observable<Exam[]> - An observable containing the list of exams.
   */
  getExams(): Observable<Exam[]> {
    return this.http.get<ExamApi[]>(`${this.apiUrl}/exams`).pipe(
      map((data: ExamApi[]) =>
        data.map(exam => ({
          id: exam.id,
          firstName: exam.student.first_name,
          lastName: exam.student.last_name,
          status: exam.status,
          location: exam.meeting_point || 'En attente',
          date: exam.date ? this.formatDate(exam.date) : 'En attente',
          time: exam.date ? this.formatTime(exam.date) : 'En attente'
        }))
      )
    );
  }

  /**
   * Adds a new exam to the backend.
   * @param exam - The exam to be added.
   * @returns Observable<Exam> - An observable containing the added exam.
   */
  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${this.apiUrl}/exams`, exam);
  }

  /**
   * Formats a date string into a localized date string.
   * @param dateString - The date string to format.
   * @returns The formatted date string.
   */
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  }

  /**
   * Formats a date string into a localized time string.
   * @param dateString - The date string to format.
   * @returns The formatted time string.
   */
  private formatTime(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getHours()}h`;
  }
}