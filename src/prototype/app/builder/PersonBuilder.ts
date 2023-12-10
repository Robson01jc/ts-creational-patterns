import { Person } from '../model/Person';

export interface PersonBuilder {
  build(): Person;
}
