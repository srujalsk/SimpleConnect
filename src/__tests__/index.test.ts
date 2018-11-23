import { FSDatabase, QueryExecutor } from '../index';

test('Is QueryExecutor Exposed in index', () => {
  const qe = new QueryExecutor();
  const db = new FSDatabase("Test File Path");
  db.ConnectDB();
  qe.ExecuteQuery(db,"Test Query",(data:string) => {
    expect(data).toBe("output")
  });
  db.DisconnectDB();
  db.Dispose();
});