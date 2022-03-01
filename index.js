const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('The api');
    res.end('The api');
});

app.use(require('./src/routes/company.route'));
app.use(require('./src/routes/flight.route'));

console.log('Server running');
app.listen(3000);
