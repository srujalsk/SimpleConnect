import { DatabaseName } from '../../../Enumerators/DatabaseName.enum';
import { DatabaseType } from '../../../Enumerators/DatabaseType.enum';
import {IDatabase} from '../../../Interfaces/IDatabase';

export class FSDatabase implements IDatabase {
    
    public type: DatabaseType;    
    public name: DatabaseName;
    public connectionString: string;
    public connectionObject: any;

    /**
     * Initializes the parameters that will used for connecting to a database.
     */
    constructor(filePath: string) {
        this.type = DatabaseType.File;
        this.name = DatabaseName.FileSystem;
        this.connectionString = filePath;
        this.connectionObject = null;
    }

    /**
     * ConnectDB method will establish the connection to Microsoft SQL Server Database. 
     * --> In case of file stream it won't be required as we would be creating file system object on per call basis.
     */
    public ConnectDB(): boolean {
        return true;
    }
    
    /**
     * DisconnectDB method will disconnect the connection with Microsoft SQL Server Database.
     * --> In case of file stream it won't be required as we would be creating file system object on per call basis.
     */
    public DisconnectDB(): boolean {
        return true;
    }

    /**
     * Dispose method will release the memory.
     */
    public Dispose(): void {
        this.connectionString = "";
        this.connectionObject = null;
    }

}