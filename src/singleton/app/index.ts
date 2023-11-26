import { Connection } from './conn/Connection';
import { ConnectionPool } from './conn/ConnectionPool';

function doQuery1() {
  const pool: ConnectionPool = ConnectionPool.getInstance();
  const conn: Connection | null = pool.getConnection();

  if (!conn) return;

  conn.query('SELECT * FROM A1');

  pool.leaveConnection(conn);
}

function doQuery2() {
  const pool: ConnectionPool = ConnectionPool.getInstance();
  const conn: Connection | null = pool.getConnection();

  conn?.query('SELECT * FROM A2');
}

function doQuery3() {
  const pool: ConnectionPool = ConnectionPool.getInstance();
  const conn: Connection | null = pool.getConnection();

  conn?.query('SELECT * FROM A3');
}

export const singletonApp = {
  main() {
    doQuery1();
    doQuery2();
    doQuery3();
  },
};
