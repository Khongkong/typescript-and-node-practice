import * as dotenv from "dotenv";
import App from "./app";
import DbConnection from "./dbConnection";

const app = new App;
const dbConnection = new DbConnection;

if (!process.env.ALREADY_SET) {
    // loading dotenv
    dotenv.config();
}

dbConnection.createConnection()
.then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port);
});
