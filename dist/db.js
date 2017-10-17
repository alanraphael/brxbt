"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loki = require("lokijs");
let db;
function DB() {
    if (!db)
        db = new loki('./database/loki.json', { autosave: true, autoload: true });
    return db;
}
exports.default = DB();
