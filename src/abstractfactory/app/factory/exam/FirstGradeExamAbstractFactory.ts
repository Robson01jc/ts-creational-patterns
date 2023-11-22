import { ExamQuestionnaire } from '../../model/examquestionnaire/ExamQuestionnaire';
import { FirstGradeExamQuestionnaire } from '../../model/examquestionnaire/FirstGradeExamQuestionnaire';
import { ExamSchedule } from '../../model/examschedule/ExamSchedule';
import { FirstGradeExamSchedule } from '../../model/examschedule/FirstGradeExamSchedule';
import { ExamAbstractFactory } from './ExamAbstractFactory';

export class FirstGradeExamAbstractFactory implements ExamAbstractFactory {
  getSchedule(): ExamSchedule {
    return new FirstGradeExamSchedule();
  }
  getQuestionnaire(): ExamQuestionnaire {
    return new FirstGradeExamQuestionnaire();
  }
}
