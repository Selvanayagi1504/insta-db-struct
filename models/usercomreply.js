'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUserPostComReply = db.sequelize.define('instaUserPostComReply', {
  moboremail: Sequelize.STRING,
  postid:Sequelize.INTEGER,
  replycommentuserid:Sequelize.STRING,
  commentid:Sequelize.INTEGER,
  comment:Sequelize.STRING
})
db.sequelize.sync().then(function() {
})

module.exports = instaUserPostComReply
