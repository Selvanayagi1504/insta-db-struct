'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUserPosts = db.sequelize.define('instaUserPosts', {
  moboremail: Sequelize.STRING,
  postid:Sequelize.INTEGER,
  comments:Sequelize.STRING,
  likes:Sequelize.INTEGER,
  date:Sequelize.STRING
})
db.sequelize.sync().then(function() {
})

module.exports = instaUserPosts
