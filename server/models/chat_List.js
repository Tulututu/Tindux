'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chat_List.init(
    {
     curUser: {
        DataTypes: INTEGER(15),
        references: {
            model: "users",
            key: "oAuthId",
          }
        },
     chatId: DataTypes.INTEGER,
     recentMsg: DataTypes.STRING(20)
    },
    {
      sequelize,
      modelName: 'chat_Lists',
    }
  );
  return Chat_List;
};
