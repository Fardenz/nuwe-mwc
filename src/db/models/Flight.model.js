const { DataTypes, Sequelize } = require('sequelize');

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = function (sequelize) {
    return sequelize.define(
        'Flight',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            company_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            origin_country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            origin_continent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            destination_country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            destination_countinent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            seats: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'Flight',
        },
    );
};
