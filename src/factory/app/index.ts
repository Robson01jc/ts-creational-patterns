import { DB } from './db/DB';
import { DBFactory } from './factory/DBFactory';
// import { OracleFactory } from './factory/OracleFactory';
import { PostgresFactory } from './factory/PostgresFactory';

export const factoryApp = {
  main(): void {
    // const factory: DBFactory = new OracleFactory();
    const factory: DBFactory = new PostgresFactory();
    const db: DB = factory.getDatabase();

    db.query('SELECT * FROM users');
    db.update("INSERT INTO users VALUES ('User', 25)");
  },
};
