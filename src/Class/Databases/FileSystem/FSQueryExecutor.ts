import { IDatabase } from "../../../Interfaces/IDatabase";
import { IQueryExecutor } from "../../../Interfaces/IQueryExecutor";
import { FSDatabase } from "./FSDatabase";

export class FSQueryExecutor implements IQueryExecutor {

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
    public ExecuteQuery(db:FSDatabase, query: string): boolean {
        try {
            return true;
        } catch (error) {
            return false;
        }
    }
    
}