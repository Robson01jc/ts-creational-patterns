export class User {
  constructor(
    public username: string,
    public group: string,
    public superUser: boolean,
    public permissions: string[]
  ) {}
}
