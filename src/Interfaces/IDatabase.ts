import { DatabaseName } from '../Enumerators/DatabaseName.enum';
import { DatabaseType } from '../Enumerators/DatabaseType.enum';
import { IDisposable } from './IDisposable';

export interface IDatabase extends IDisposable{

    type: DatabaseType;
    name: DatabaseName;
    connectionString: string;
    connectionObject: any;

    ConnectDB(): boolean;
    DisconnectDB(): boolean;
}