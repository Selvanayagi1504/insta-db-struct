'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUserMovie = db.sequelize.define('instaUserMovie', {
  moboremail: Sequelize.STRING,
  title:Sequelize.TEXT,
  poster:Sequelize.TEXT,
  year:Sequelize.STRING
})
db.sequelize.sync().then(function() {
})

module.exports = instaUserMovie
