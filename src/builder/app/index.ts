import { UserBuilder } from './builder/UserBuilder';
import { User } from './model/User';

export const builderApp = {
  main() {
    const user1 = new UserBuilder('user1').inGroup('simple-users').now();
    const user2 = new UserBuilder('user2')
      .inGroup('simple-users')
      .withPermissions(['read', 'write'])
      .now();
    const superUser = new UserBuilder('superuser')
      .asSuperUser()
      .withPermissions(['read', 'write', 'execute'])
      .now();

    const users: User[] = [user1, user2, superUser];
    users.forEach((user) => console.log(user));
  },
};
