module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    user_pass: {
        type: DataTypes.STRING,
    }
  });
  return User;
};
