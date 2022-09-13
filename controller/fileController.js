//Setup require modules
const fs = require('fs')
const path = require('path')
const dbPath = path.join(__dirname, '../db');
//Setup File class
class File {
    static read(fileName) {
        let myFile;
        const filePath = path.join(dbPath, fileName);
        try {
            myFile = JSON.parse(fs.readFileSync(filePath))
        } catch(e) {
            myFile = [];
        }
        return myFile;
    }
    static write(fileName, data) {
        const filePath = path.join(dbPath, fileName);
        fs.writeFileSync(filePath, JSON.stringify(data));
        
    }
}
//Export
module.exports = File;