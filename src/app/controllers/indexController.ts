import {Request, Response} from "express";

class IndexController {
    helloWorld(__: Request, res: Response) {
        res.send('Hello world');
    }
}

export default IndexController;
