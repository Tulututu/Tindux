"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("chat_Lists", {
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
      chatId: {
        type: Sequelize.INTEGER,
      },
      recentMsg: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("chat_Lists");
  },
};
