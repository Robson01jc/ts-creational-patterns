export interface DB {
  query(sql: string): void;
  update(sql: string): void;
}
