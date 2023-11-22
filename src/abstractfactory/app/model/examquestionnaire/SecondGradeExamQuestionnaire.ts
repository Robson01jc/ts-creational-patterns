import { ExamQuestionnaire } from './ExamQuestionnaire';

export class SecondGradeExamQuestionnaire implements ExamQuestionnaire {
  questions(): string[] {
    return [
      'If you could change the color of the sky, what color would you choose and why?',
      'If you could be a bird, which one would you choose to be?',
      'Which is the thing that you enjoy doing?',
      'Which one of your family traditions are your favorite and why?',
      'If you could give a message to your past self, what would you say?',
    ];
  }
}
