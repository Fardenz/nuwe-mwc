module.exports = {
    getFlight: function (req, res) {
        const sequelize = await getDbConnection();
        return sequelize.models.flight.findOne({
            where: {
                id: req.params.id,
            },
        });
    },
    getFlights: function (req, res) {
        const sequelize = await getDbConnection();
        const flights = await sequelize.models.flight.findAll({
            raw: true,
        });
        return flights;
    },
    createFlight: function (req, res) {
        const sequelize = await getDbConnection();
        await sequelize.models.flight.create(req.data);
    },
    deleteFlight: function (req, res) {
        const sequelize = await getDbConnection();
        const flight = await sequelize.models.flight.findOne({
            where: {
                id: req.params.id,
            },
        });
        flight.destroy();
    },
    editFlight: function (req, res) {
        const sequelize = await getDbConnection();
        let flight = await sequelize.models.flight.findOne({
            where: {
                id: req.params.id,
            },
        });
        flight= { ...flight, ...req.data };
        return flight;
    },
};
