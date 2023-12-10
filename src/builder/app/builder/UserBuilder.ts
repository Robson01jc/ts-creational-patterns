import { User } from '../model/User';

export class UserBuilder {
  constructor(private username: string) {}
  private group?: string;
  private superUser?: boolean;
  private permissions?: string[];

  inGroup(group: string): UserBuilder {
    this.group = group;
    return this;
  }

  asSuperUser(): UserBuilder {
    this.superUser = true;
    return this;
  }

  withPermissions(permissions: string[]): UserBuilder {
    this.permissions = permissions;
    return this;
  }

  now(): User {
    return new User(
      this.username,
      this.group ?? 'default',
      this.superUser ?? false,
      this.permissions ?? ['read']
    );
  }
}
