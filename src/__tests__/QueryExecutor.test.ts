import * as path from "path";
import { FSDatabase } from "../Class/Databases/FileSystem/FSDatabase";
import { QueryExecutor } from "../Class/QueryExecutor";

test('0001 Is Execute Query accepting Query input as parameter ', () => {
    const qe = new QueryExecutor();
    // global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
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

test('0002 Is able to write data to a file', () => {
    const qe = new QueryExecutor();
    // global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"SET Hello World !",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe(true)
    });
    db.DisconnectDB();
    db.Dispose();
});


test('0003 Is able to append data to a file', () => {
    const qe = new QueryExecutor();
    // global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"APPEND This is a test message",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe(true)
    });
    db.DisconnectDB();
    db.Dispose();
});

test('0004 Is able to clear data from a file', () => {
    const qe = new QueryExecutor();
    // global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"CLEAR",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe(true)
    });
    db.DisconnectDB();
    db.Dispose();
});


test('0005 Is able to reset data of a file to default value', () => {
    const qe = new QueryExecutor();
    // global.console.debug("Evaluated Path is " + __dirname + '/testData/Test.txt');
    const db = new FSDatabase(__dirname + '/testData/Test.txt');
    db.ConnectDB();
    qe.ExecuteQuery(db,"SET Test",(data: string, error?: string | Error) => {
        global.console.debug("Output data is --> " + data)
        if(error) {
            expect(error.toString()).toBe("");
        }
        else {
            expect(error).toBe(undefined);
        }
        expect(data).toBe(true)
    });
    db.DisconnectDB();
    db.Dispose();
});