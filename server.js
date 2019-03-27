const express = require('express')
const app = express()
const port = 4000
const DBConnect = require('./API/SharedController/DBConnect');
app.get('/', (req, res) => res.send('Never expose this online or in production put debug https here'));

app.get('/DebugMoney/:Money',function (req, res) {
    let Money =req.params.Money;
    let query ="update sampledb.players SET Money = "+Money;
    DBConnect.DBConnect(query, function (response) {
        if (response != undefined) {
           // console.log(response);
            res.sendStatus(200);
        } else {
            callback(undefined);
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))