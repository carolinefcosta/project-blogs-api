module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING }
  },
  {
    timestamp: false,
    underscored: true,
    tableName: 'users'
  })

  return User;
}