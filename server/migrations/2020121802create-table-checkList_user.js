"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("checkList_users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      curUser: {
        type: Sequelize.INTEGER(15),
        references: {
          model: "users",
          key: "oAuthId",
        },
      },
      selectUser: {
        type: Sequelize.INTEGER(15),
        references: {
          model: "users",
          key: "oAuthId",
        },
      },
      status: {
        type: Sequelize.INTEGER(1),
      },
      FBF:{
        type: Sequelize.INTEGER(1),
      },
      checked:{
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
    await queryInterface.dropTable("checkList_users");
  },
};
