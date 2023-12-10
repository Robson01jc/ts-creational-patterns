import { Person } from '../model/Person';
import { PersonBuilder } from './PersonBuilder';

export class FatManBuilder implements PersonBuilder {
  build(): Person {
    return new Person(
      '                   ',
      '       (^ ^)          ',
      '       <)  )\\         ',
      '_______/__\\___________',
      7
    );
  }
}
