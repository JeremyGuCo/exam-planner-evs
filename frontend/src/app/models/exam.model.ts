/**
 * Interface representing an exam.
 */
export interface Exam {
  id: number; // Unique identifier for the exam
  firstName: string; // Student's first name
  lastName: string; // Student's last name
  status: string; // Exam status
  date?: string; // Exam date
  time?: string; // Exam time
  location?: string; // Exam location
}