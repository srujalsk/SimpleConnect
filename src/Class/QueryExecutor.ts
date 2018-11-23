import { EventEmitter } from "events";
import { FSDatabase } from "../Class/Databases/FileSystem/FSDatabase";
import { FSQueryExecutor } from "../Class/Databases/FileSystem/FSQueryExecutor";
import { IDatabase } from "../Interfaces/IDatabase";
import { IQueryExecutor } from "../Interfaces/IQueryExecutor";

export class QueryExecutor implements IQueryExecutor {

    private resultEmitter: EventEmitter;

    constructor() {
        this.resultEmitter = new EventEmitter();
    }

    /**
     * Dispose method will dispose the un-used objects
     */
    public Dispose(): void {
        return;
    }

    /**
     * ExecuteQuery method will execute the provided query on the provided database instance.
     * @param {string} query Pass the Query to be executed on provided database instance.
     */
    public ExecuteQuery(db:IDatabase, query: string, result: (data: any) => void, parameters?: any[], error?: string): void {
        let executorInstance = null;
        if(db instanceof FSDatabase) {
            executorInstance = new FSQueryExecutor();
            executorInstance.ExecuteQuery(db, query, result, parameters, error);
        }
        else {
            error = "No matching database is found"
        }
    }
    
}