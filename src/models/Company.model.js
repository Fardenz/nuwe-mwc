const { DataTypes } = require('sequelize');

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = function (sequelize) {
    return sequelize.define(
        'Company',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total_flights: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            total_seats: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'Company',
        },
    );
};
