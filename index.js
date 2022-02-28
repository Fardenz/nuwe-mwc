const express = require('express');
const app = express();

const { getDbConnection } = require('./src/db');

app.get('/company', function (req, res) {
    const sequelize = await getDbConnection();
    const companies = await sequelize.models.company.findAll({
        raw: true,
    });
    return companies;
});

app.post('/company', function (req, res) {
    const sequelize = await getDbConnection();
    await sequelize.models.company.create(req.data);
});

app.delete('/company', function (req, res) {});

app.put('/company', function (req, res) {});

app.listen(3000);
