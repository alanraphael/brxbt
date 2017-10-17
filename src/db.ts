import * as loki from 'lokijs';

let db;

function DB() {
    if (!db)
        db = new loki('./database/loki.json', {autosave: true, autoload: true});

    return db;
}

export default DB();
