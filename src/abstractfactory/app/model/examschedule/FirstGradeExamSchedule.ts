import { ExamSchedule } from './ExamSchedule';

export class FirstGradeExamSchedule implements ExamSchedule {
  startTime(): Date {
    return new Date(2023, 11, 15);
  }
  duration(): number {
    return 3;
  }
}
