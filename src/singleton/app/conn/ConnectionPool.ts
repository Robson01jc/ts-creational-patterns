import { Connection } from './Connection';

export class ConnectionPool {
  private static instance: ConnectionPool;
  private static POOL_SIZE: number = 2;

  private constructor(private connectionsPool: Connection[]) {}

  private static createPool(): ConnectionPool {
    const connections = [...Array(ConnectionPool.POOL_SIZE).keys()].map(() => {
      return new Connection();
    });

    return new ConnectionPool(connections);
  }

  public static getInstance(): ConnectionPool {
    if (!ConnectionPool.instance) {
      ConnectionPool.instance = ConnectionPool.createPool();
    }

    return ConnectionPool.instance;
  }

  public getConnection(): Connection | null {
    const availableConn = this.connectionsPool.find((conn) => !conn.inUse);

    if (!availableConn) {
      console.log('No Connections available');

      return null;
    }

    availableConn.inUse = true;

    return availableConn;
  }

  public leaveConnection(conn: Connection): void {
    conn.inUse = false;
  }
}
