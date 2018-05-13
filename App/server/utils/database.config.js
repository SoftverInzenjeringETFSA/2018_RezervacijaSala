const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://tim9:tim9-si-mongo@ds119070.mlab.com:19070/rezervacija-sale';
const dbName = 'rezervacija-sale';

/*
    Kada je potrebno
    U database-communication.js kada je potrebno obaviti neku CRUD operaciju nad bazom
    pozvati MongoWrapper(koji je već importan u fajlu) kao funkciju i kao parametar
    funkciji proslijediti funkciju koja prima dva parametra, db objekat i callback funkciju.
    Nakon što se obave sve operacije sa bazom pozvati callback funkciju.

    Primjer:

    MongoWrapper((dbo, cb) => {
        //odraditi sve sa dbo
        cb();
    })

    Obratiti pažnju na asinhronost tako da se cb() pozove nakon svih async funkcija.
*/



/**
 * @param {any} handler Function (db, callback) => void. Calls callback at the end
 */
const MongoWrapper = (handler) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if(err) {
            console.log(err);
            return;
        }
      
        const dbo = client.db(dbName);
      
        handler(dbo, function() {
          client.close();
        });
      });
};

module.exports = MongoWrapper;