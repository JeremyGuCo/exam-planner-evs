import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of exams from the backend
   * @returns Observable<Exam[]> - An observable containing the list of exams
   */
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/exams`);
  }

  /**
   * Adds a new exam to the backend
   * @param exam - The exam to be added
   * @returns Observable<Exam> - An observable containing the aded exam
   */
  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${this.apiUrl}/exams`, exam);
  }

}
