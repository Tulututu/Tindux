'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      oAuthId: DataTypes.INTEGER(15),
      userName: DataTypes.STRING(30),
      gender: DataTypes.INTEGER(1),
      age: DataTypes.INTEGER(1),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      residence: DataTypes.INTEGER,
      profileImage: DataTypes.STRING,
      enteredUserInformation: DataTypes.INTEGER(1)

    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return User;
};
