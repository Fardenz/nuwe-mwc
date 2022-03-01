require('dotenv').config();
const log = require('log4js').getLogger('db');
const { Sequelize } = require('sequelize');

let sequelize;
/**
 *
 * @returns {Promise<import('sequelize').Sequelize>}
 */
async function getDbConnection() {
    if (sequelize) return sequelize;
    return initializeDbModels();
}

/**
 *
 * @returns {Promise<import('sequelize').Sequelize>}
 */
async function initializeDbModels() {
    sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_URL,
        logging: log.debug.bind(log),
    });

    const modelDefiners = [require('../models/Company.model'), require('../models/Flight.model')];
    for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
    }

    await sequelize.sync();
    return sequelize;
}

module.exports = { getDbConnection };
