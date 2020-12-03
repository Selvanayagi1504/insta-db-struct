'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instaUser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      moboremail: {
        type: Sequelize.STRING
      },
      fname: {
        type: Sequelize.STRING
      },
      uname: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      posts: {
        type: Sequelize.TEXT
      },
      fav: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instaUser');
  }
};