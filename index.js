const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('The api');
    res.end('The api');
});

app.use(require('./src/routes/company.route'));
app.use(require('./src/routes/flight.route'));
const port = process.env.PORT || 3000;
console.log('Server running on ' + port);
app.listen(port);
