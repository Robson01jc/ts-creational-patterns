import { ExamQuestionnaire } from '../../model/examquestionnaire/ExamQuestionnaire';
import { SecondGradeExamQuestionnaire } from '../../model/examquestionnaire/SecondGradeExamQuestionnaire';
import { ExamSchedule } from '../../model/examschedule/ExamSchedule';
import { SecondGradeExamSchedule } from '../../model/examschedule/SecondGradeExamSchedule';
import { ExamAbstractFactory } from './ExamAbstractFactory';

export class SecondGradeExamAbstractFactory implements ExamAbstractFactory {
  getSchedule(): ExamSchedule {
    return new SecondGradeExamSchedule();
  }
  getQuestionnaire(): ExamQuestionnaire {
    return new SecondGradeExamQuestionnaire();
  }
}
