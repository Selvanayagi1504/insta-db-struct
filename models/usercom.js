'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUserPostCom = db.sequelize.define('instaUserPostCom', {
  moboremail: Sequelize.STRING,
  postid:Sequelize.INTEGER,
  commentuserid:Sequelize.STRING,
  commentid:Sequelize.INTEGER,
  comment:Sequelize.STRING
})
db.sequelize.sync().then(function() {
})

module.exports = instaUserPostCom
