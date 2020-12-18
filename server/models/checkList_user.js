'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckedList_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheckedList_User.init(
    {
        curUser: {
            DataTypes: INTEGER(15),
            references: {
                model: "users",
                key: "oAuthId",
              }
            },
        selectUser: {
            DataTypes: INTEGER(15),
            references: {
                model: "users",
                key: "oAuthId",
              }
            },
        status: DataTypes.INTEGER(1),
        FBF: DataTypes.INTEGER(1),
        checked: DataTypes.INTEGER(1)
    },
    {
      sequelize,
      modelName: 'checkList_users',
    }
  );
  return CheckedList_User;
};
