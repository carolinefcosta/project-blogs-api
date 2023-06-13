module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    id: {
      primaryKey: true,
      autoIcrement: true,
      type: DataTypes.INTEGER,
    },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  })

  return Category;
}