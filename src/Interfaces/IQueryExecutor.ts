import { IDatabase } from './IDatabase';
import { IDisposable } from './IDisposable';

export interface IQueryExecutor extends IDisposable {
    ExecuteQuery(db: IDatabase, query: string, result: (data: any) => void, parameters?: any[], error?: string): void;
}