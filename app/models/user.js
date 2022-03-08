module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    firstName	: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    userName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
    
  });
  return Users;
};