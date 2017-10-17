import * as express from 'express';
import * as bodyParser from 'body-parser';

// Modules
import bitValor from './modules/bitvalor/controller';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes() {
        let router = express.Router();

        this.express.use('/api/bitvalor', bitValor);
    }
}

export default new App().express;
