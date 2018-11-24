import { FSDatabase, QueryExecutor } from '../index';

test('Is QueryExecutor Exposed in index', () => {
  const qe = new QueryExecutor();
  const db = new FSDatabase("Test File Path");
  db.ConnectDB();
  qe.ExecuteQuery(db,"Test Query",(data:string, error?: string | Error) => { 
    global.console.debug("Output data is --> " + data)
    expect(data).toBe(null)
    if(error) {
      global.console.warn(error.toString());
      expect(error.toString()).toBe("Error: No Standard Query Action found !");
    }
    else {
      expect(error).toBe(undefined);
    }
  });
  db.DisconnectDB();
  db.Dispose();
});