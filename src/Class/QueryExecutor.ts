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
    public ExecuteQuery(db:IDatabase, query: string): boolean {

        let executorInstance = null;

        try {

            if(db instanceof FSDatabase){
                executorInstance = new FSQueryExecutor();
                return executorInstance.ExecuteQuery(db,query);
            }
            else {
                return false;
            }    

        } catch (error) {
            return false;
        }
    }
    
}