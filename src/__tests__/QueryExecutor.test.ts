import * as path from "path";
import { FSDatabase } from "../Class/Databases/FileSystem/FSDatabase";
import { QueryExecutor } from "../Class/QueryExecutor";

test('Is Execute Query accepting Query input as parameter ', () => {
    const qe = new QueryExecutor();
    global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"GET",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe("Test")
    });
    db.DisconnectDB();
    db.Dispose();
});

test('Is able to write data to a file', () => {
    const qe = new QueryExecutor();
    global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"GET",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe("Test")
    });
    db.DisconnectDB();
    db.Dispose();
});