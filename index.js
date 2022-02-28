const express = require('express');
const app = express();

const { getDbConnection } = require('./src/db');

app.get('/company', async function (req, res) {
    const sequelize = await getDbConnection();
    const companies = await sequelize.models.company.findAll({
        raw: true,
    });
    return companies;
});

app.post('/company', async function (req, res) {
    const sequelize = await getDbConnection();
    await sequelize.models.company.create(req.data);
});

app.delete('/company/:id', async function (req, res) {
    const sequelize = await getDbConnection();
    const company = await sequelize.models.company.findOne();
    company.destroy();
});

app.put('/company/:id', async function (req, res) {
    const sequelize = await getDbConnection();
    let company = await sequelize.models.company.findOne();
    company = { ...company, ...req.data };
    res.end(company);
});

app.get('/', (req, res) => {
    console.log('The api');
    res.end('The api');
});

app.listen(3000);
