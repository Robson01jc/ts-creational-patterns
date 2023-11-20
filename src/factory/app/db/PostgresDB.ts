import { DB } from './DB';

export class PostgresDB implements DB {
  query(sql: string): void {
    console.log(`Querying ${sql} in Postgres database`);
  }

  update(sql: string): void {
    console.log(`Uptade query ${sql} in Postgres database`);
  }
}
