import { ExamAbstractFactory } from './factory/exam/ExamAbstractFactory';
// import { FirstGradeExamAbstractFactory } from './factory/exam/FirstGradeExamAbstractFactory';
import { SecondGradeExamAbstractFactory } from './factory/exam/SecondGradeExamAbstractFactory';
import { ExamQuestionnaire } from './model/examquestionnaire/ExamQuestionnaire';
import { ExamSchedule } from './model/examschedule/ExamSchedule';

function main(): void {
  // const factory: ExamAbstractFactory = new FirstGradeExamAbstractFactory();
  const factory: ExamAbstractFactory = new SecondGradeExamAbstractFactory();
  const schedule: ExamSchedule = factory.getSchedule();
  const questionnaire: ExamQuestionnaire = factory.getQuestionnaire();

  console.log(`
    Hi, fellow student!
    You've got ${schedule.duration()} minutes to answer the following questions:
    ${questionnaire
      .questions()
      .map((question, i) => {
        return `\t${i + 1}. ${question}`;
      })
      .join('\n')}
  `);
}

export const abstractFactoryApp = {
  main,
};
