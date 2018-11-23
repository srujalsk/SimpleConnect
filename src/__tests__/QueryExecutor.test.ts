import { FSDatabase } from "../Class/Databases/FileSystem/FSDatabase";
import { QueryExecutor } from "../Class/QueryExecutor";

test('Is Execute Query accepting Query input as parameter ', () => {
    const qe = new QueryExecutor();
    const db = new FSDatabase("TestFilePath");
    db.ConnectDB();
    qe.ExecuteQuery(db,"Test Query",(data:string) => {
        expect(data).toBe("output")
    });
    db.DisconnectDB();
    db.Dispose();
});