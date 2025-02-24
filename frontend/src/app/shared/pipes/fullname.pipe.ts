import { Pipe, PipeTransform } from '@angular/core';
import { Exam } from '../../core/models/exam.model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  /**
   * Transforms an Exam object into a string representing the student's full name
   * @param exam - The Exam object to transform
   * @returns string - The formatted full name of the student
   */
  transform(exam: Exam): string {
    return `${exam.firstName}.${exam.lastName.charAt(0)}`;
  }
}
