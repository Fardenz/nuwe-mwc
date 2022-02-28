module.exports = {
    getCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        return sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
    },
    getCompanies: async function (req, res) {
        const sequelize = await getDbConnection();
        const companies = await sequelize.models.company.findAll({
            raw: true,
        });
        return companies;
    },
    createCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        await sequelize.models.company.create(req.data);
    },
    deleteCompany: async function (req, res) {
        const sequelize = await getDbConnection();
        const company = await sequelize.models.company.findOne({
            where: {
                id: req.params.id,
            },
        });
        company.destroy();
    },
    editCompany: async function (req, res) {
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
