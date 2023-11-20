import { DB } from '../db/DB';

export interface DBFactory {
  getDatabase(): DB;
}
