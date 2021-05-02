import Route from "./route";
import IndexController from "../app/controllers/indexController";

class IndexRoute extends Route {
    private indexController = new IndexController();

    constructor() {
        super();
        this.prefix = "/";
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.indexController.helloWorld);
    }
}

export default IndexRoute;
