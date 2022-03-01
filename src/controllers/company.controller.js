const { getDbConnection } = require('../db');

module.exports = {
    getCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        res.status(200).send(
            await sequelize.models.company.findOne({
                where: {
                    id: req.params.id,
                },
            }),
        );
    },
    getCompanies: async function (req, res) {
        const sequelize = await getDbConnection();
        console.log(sequelize.models);
        const companies = await sequelize.models.company.findAll({
            raw: true,
        });
        res.status(200).send(companies);
    },
    createCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        res.status(200).send(await sequelize.models.company.create(req.body));
    },
    deleteCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        const company = await sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
        company.destroy();
        res.status(200).send(true);
    },
    editCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        let company = await sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
        company = { ...company, ...req.body };
        res.status(200).send(await company.save());
    },
};
