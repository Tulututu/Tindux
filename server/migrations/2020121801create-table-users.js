"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      oAuthId: {
        type: Sequelize.INTEGER(15),
        primaryKey: true,
      },
      userName: {
        type: Sequelize.STRING(30),
      },
      gender: {
        type: Sequelize.INTEGER(1),
      },
      age:{
        type: Sequelize.INTEGER(1),
      },
      email:{
        type: Sequelize.STRING,
      },
      password:{
        type: Sequelize.STRING,
      },
      residence:{
        type: Sequelize.INTEGER,
      },
      profileImage:{
        type: Sequelize.STRING,
      },
      enteredUserInformation:{
        type: Sequelize.INTEGER(1),
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
