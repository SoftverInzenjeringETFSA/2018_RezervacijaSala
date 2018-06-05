const MongoClient = require('mongodb').MongoClient;
/*
    Mongo mLab:
        username: tim9
        password: si-sala-2018
        url: https://mlab.com
        database: rezervacija-sale
            dbuser: tim9
            dbpassword: tim9-si-mongo
*/

//const url = 'mongodb://siprojekat:DEONMRGfcRSdN8WHSSny1t8xrojnYAnz2CiTgcGk8Y3mHsNBIV58YwUAUxpzCTLEgkATW0eccPjakHuSHZOBOA%3D%3D@siprojekat.documents.azure.com:10255/?ssl=true';
const url = 'mongodb://tim9:tim9-si-mongo@ds119060.mlab.com:19060/rezervacija-sale';
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
