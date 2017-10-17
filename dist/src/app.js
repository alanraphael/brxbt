"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
// Modules
const controller_1 = require("./modules/bitvalor/controller");
class App {
    constructor() {
        this.express = express();
        this.routes();
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        this.express.use('/api/bitvalor', controller_1.default);
    }
}
exports.default = new App().express;
