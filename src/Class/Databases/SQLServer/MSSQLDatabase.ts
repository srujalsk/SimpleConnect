import { DatabaseName } from '../../../Enumerators/DatabaseName.enum';
import { DatabaseType } from '../../../Enumerators/DatabaseType.enum';
import {IDatabase} from '../../../Interfaces/IDatabase';

export class MSSQLDatabase implements IDatabase {
    
    public type: DatabaseType;    
    public name: DatabaseName;
    public connectionString: string;
    public connectionObject: any;

    /**
     * Initializes the parameters that will used for connecting to a database.
     */
    constructor() {
        this.type = DatabaseType.SQL;
        this.name = DatabaseName.MSSqlServer;
        this.connectionString = '';
        this.connectionObject = null;
    }

    /**
     * ConnectDB method will establish the connection to Microsoft SQL Server Database. 
     */
    public ConnectDB(): boolean {
        return false;
    }
    
    /**
     * DisconnectDB method will disconnect the connection with Microsoft SQL Server Database.
     */
    public DisconnectDB(): boolean {
        return false;
    }

    /**
     * Dispose method will release the memory.
     */
    public Dispose(): void {
        this.connectionString = "";
        this.connectionObject = null;
    }

}