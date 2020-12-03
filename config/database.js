const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('d9uedlo77nv6nt', 
                                'zttqlpblctgvag', 
                                '775d254bec940f87326fc41363261b661c3cd72eb6bd79a3d0b498abec347abf', {
  host: 'ec2-75-101-212-64.compute-1.amazonaws.com',
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

