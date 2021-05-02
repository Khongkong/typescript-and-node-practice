import {Request, Response} from "express";

class IndexController {
    helloWorld(req: Request, res: Response) {
        res.send('Hello world');
    }
}

export default IndexController;
