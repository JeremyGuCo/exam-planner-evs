/**
 * Interface representing data received from the API.
 */
export interface ExamApi {
  id: number;
  student: {
    first_name: string;
    last_name: string;
  };
  status: string;
  meeting_point?: string;
  date?: string;
}

/**
 * Interface representing an exam for the frontend
 */
export interface Exam {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  date?: string;
  time?: string;
  location?: string;
}
