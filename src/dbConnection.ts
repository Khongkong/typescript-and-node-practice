import {createConnection, Connection} from "typeorm";

class DbConnection {
    private connection!: Connection;
    public async createConnection(): Promise<void> {
        try {
            this.connection = await createConnection({
                type: "mysql",
                host: process.env.DB_HOST || 'mysql',
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USER || 'root',
                password: process.env.DB_PASS || 'password',
                database: process.env.DB_NAME || 'test',
            });
            console.log('mysql is connected');
        } catch (err) {
            await this.handleConnectError();
        }
    }

    private async handleConnectError() {
        if(!this.connection.isConnected) {
            setTimeout(async () => {
                await this.createConnection();
            }, 3000);
        }
    }
}

export default DbConnection;
