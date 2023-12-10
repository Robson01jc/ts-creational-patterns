import { Person } from '../model/Person';
import { PersonBuilder } from './PersonBuilder';

export class StickManBuilder implements PersonBuilder {
  build(): Person {
    return new Person(
      '                   ',
      '        o          ',
      '       /|\\          ',
      '_______/_\\___________',
      7
    );
  }
}
