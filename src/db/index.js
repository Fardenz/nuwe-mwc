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
    const uri = process.env.DATABASE_URL || 'postgres://mwc:changeme@localhost:5432/mwc';
    const ssl = process.env.DATABASE_URL && true;
    console.log(ssl, uri);
    sequelize = new Sequelize(uri, {
        /* dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'mwc',
        database: 'mwc',
        password: 'changeme', */
        logging: log.debug.bind(log),
        ssl: ssls,
    });

    const modelDefiners = [require('../models/Company.model'), require('../models/Flight.model')];
    for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
    }

    await sequelize.sync();
    return sequelize;
}

module.exports = { getDbConnection };
