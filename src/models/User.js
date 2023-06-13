module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    id: {
      primaryKey: true,
      autoIcrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users'
  })

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId', as: 'blogPosts'
    })
  }

  return User;
}