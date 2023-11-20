import { DB } from './DB';

export class OracleDB implements DB {
  query(sql: string): void {
    console.log(`Querying ${sql} in Oracle database`);
  }

  update(sql: string): void {
    console.log(`Uptade query ${sql} in Oracle database`);
  }
}
