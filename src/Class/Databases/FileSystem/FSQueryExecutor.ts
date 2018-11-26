import * as fs from "fs";
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
    public ExecuteQuery(db:FSDatabase, query: string, result: (data: any, error?: string | Error) => void, parameters?: any[]): void {
        try {

            if(query.trim().indexOf(" ") !== -1) {
                const querySplit = query.toUpperCase().split(" ")

                // Perform action based upon the first value of querySplit
                switch (querySplit[0]) {
                    case "GET":
                        result(fs.readFileSync(db.connectionString).toString());
                        break;
                    
                    case "SET":
                        querySplit.shift();
                        fs.writeFileSync(db.connectionString,querySplit.join());
                        result(true);
                        break;

                    case "APPEND":
                        querySplit.shift();
                        fs.appendFileSync(db.connectionString, querySplit.join());
                        result(true);
                        break;
                
                    default:
                        throw new Error("No Standard Query Action found !");
                        break;
                }
            }
            else {
                throw new Error("Invalid query format provided, please refer to the documentation for more information.")
            }
        } catch (err) {
            result(null,err);
        }
    }
}