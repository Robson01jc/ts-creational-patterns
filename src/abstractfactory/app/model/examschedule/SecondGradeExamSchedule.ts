import { ExamSchedule } from './ExamSchedule';

export class SecondGradeExamSchedule implements ExamSchedule {
  startTime(): Date {
    return new Date(2023, 10, 28);
  }
  duration(): number {
    return 5;
  }
}
