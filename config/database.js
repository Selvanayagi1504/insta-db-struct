const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('instagram', 
                                'postgres', 
                                'selva123', {
  host: 'localhost',
  port:5432,
  dialect: 'postgres',
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

