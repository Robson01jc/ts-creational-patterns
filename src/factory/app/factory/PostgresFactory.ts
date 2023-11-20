import { DB } from '../db/DB';
import { PostgresDB } from '../db/PostgresDB';
import { DBFactory } from './DBFactory';

export class PostgresFactory implements DBFactory {
  getDatabase(): DB {
    return new PostgresDB();
  }
}
