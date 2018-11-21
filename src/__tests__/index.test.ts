import { FSDatabase, QueryExecutor } from '../index';

test('Is QueryExecutor Exposed in index', () => {
  const qe = new QueryExecutor();
  const db = new FSDatabase();
  expect(qe.ExecuteQuery(db,"Test Query")).toBe(true);
});