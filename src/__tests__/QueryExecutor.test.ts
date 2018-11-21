import { FSDatabase } from "../Class/Databases/FileSystem/FSDatabase";
import { QueryExecutor } from "../Class/QueryExecutor";

test('Is Execute Query accepting Query input as parameter ', () => {
    const qe = new QueryExecutor();
    const db = new FSDatabase();
    expect(qe.ExecuteQuery(db, "Test Query")).toBe(true);
});