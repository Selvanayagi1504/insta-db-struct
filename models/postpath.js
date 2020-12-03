'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUserPostPath = db.sequelize.define('instaUserPostPath', {
  moboremail: Sequelize.STRING,
  postid:Sequelize.INTEGER,
  pathid:Sequelize.INTEGER,
  url:Sequelize.TEXT
})
db.sequelize.sync().then(function() {
})

module.exports = instaUserPostPath
