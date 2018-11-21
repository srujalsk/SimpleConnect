import { IDatabase } from './IDatabase';
import { IDisposable } from './IDisposable';

export interface IQueryExecutor extends IDisposable {
    ExecuteQuery(db: IDatabase, query: string): boolean;
}