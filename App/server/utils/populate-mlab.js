/*
    U slučaju da budemo mijenjali bazu, 
    podatke koji su nam potreni za inicijalno pokretanje aplikacije 
    dodajte ovdje da pokretanjem ovog fajla možemo jednostavno sve da restoreamo.

*/

const MongoWrapper = require('./database.config');

MongoWrapper((dbo, cb) => {
    dbo.createCollection("schedule", (err, res) => {
        if (err) throw err;
        console.log('Collection "schedule" created!');
        cb();
      });
})