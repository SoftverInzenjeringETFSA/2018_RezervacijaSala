/*
    U slučaju da budemo mijenjali bazu, 
    podatke koji su nam potreni za inicijalno pokretanje aplikacije 
    dodajte ovdje da pokretanjem ovog fajla možemo jednostavno sve da restoreamo.

*/

const MongoWrapper = require('./database.config');

MongoWrapper((dbo, cb) => {
    dbo.createCollection('schedule', (err, res) => {
        if (err) throw err;
        console.log('Collection "schedule" created!');
        cb();
      });
});

MongoWrapper((dbo, cb) => {
    dbo.createCollection('semester', (err, res) => {
        if (err) throw err;
        console.log('Collection "semester" created!');
        dbo.collection('semester').insertOne({
            name: 'Ljetni semestar 2018',
            beginsAt: new Date(2018,1,20),
            endsAt: new Date(2018,6,21)
        }, (err, res) => {
            if(err) throw err;
            console.log("Created summer semester 2018");
            cb();
        });
      });
})