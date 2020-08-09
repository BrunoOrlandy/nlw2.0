const DataBase = require('sqlite-async')

module.exports = DataBase.open(__dirname + '/database.sqlite').then(execute)


function altertable(db){
    return db.exec(
        `
            DROP TABLE class_schadule;
        `)
}

function alter_table(db){
    return db.exec(
        `
            ALTER TABLE class_schadule RENAME TO class_schedule;
        `)
}
function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );
        
        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}
