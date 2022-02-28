module.exports = {
    getCompany: function (req, res) {
        const sequelize = await getDbConnection();
        return sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
    },
    getCompanies: function (req, res) {
        const sequelize = await getDbConnection();
        const companies = await sequelize.models.company.findAll({
            raw: true,
        });
        return companies;
    },
    createCompanies: function (req, res) {
        const sequelize = await getDbConnection();
        await sequelize.models.company.create(req.data);
    },
    deleteCompany: function (req, res) {
        const sequelize = await getDbConnection();
        const company = await sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
        company.destroy();
    },
    updateCompany: function (req, res) {
        const sequelize = await getDbConnection();
        let company = await sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
        company = { ...company, ...req.data };
        return company;
    },
};
