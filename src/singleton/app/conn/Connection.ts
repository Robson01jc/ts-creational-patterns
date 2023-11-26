export class Connection {
  constructor(private _inUse: boolean = false) {}

  public get inUse(): boolean {
    return this._inUse;
  }

  public set inUse(inUse: boolean) {
    this._inUse = inUse;
  }

  public query(sql: string): void {
    console.log(`Running ${sql} in Connection ${this}`);
  }
}
