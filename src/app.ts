if (!process.env.ALREADY_SET) { require('dotenv').config(); }

import express, {Application} from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import path from "path";
import {router} from "./router";

class App {
    private app: Application;
    constructor() {
        this.app = express();
        this.app.use(cookieParser());
        this.app.use(logger('dev'));

        this.app.use(bodyParser.json());
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));

        for (const route of router) {
            this.app.use(route.getPrefix(), route.getRouter());
        }
    }

    listen(port: any):void {
        this.app.listen(port, () => {
            console.log(`Server runs on port ${port}`);
        });
    }
}

const app = new App;

const port = process.env.PORT || 5000;
app.listen(port);
