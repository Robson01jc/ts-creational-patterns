import { ExamQuestionnaire } from './ExamQuestionnaire';

export class FirstGradeExamQuestionnaire implements ExamQuestionnaire {
  questions(): string[] {
    return [
      'Which is your favorite movie and why do you like it?',
      'What makes you happy?',
      'Which is your favorite song and what do you like about it?',
    ];
  }
}
