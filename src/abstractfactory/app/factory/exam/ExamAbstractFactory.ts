import { ExamQuestionnaire } from '../../model/examquestionnaire/ExamQuestionnaire';
import { ExamSchedule } from '../../model/examschedule/ExamSchedule';

export interface ExamAbstractFactory {
  getSchedule(): ExamSchedule;
  getQuestionnaire(): ExamQuestionnaire;
}
