const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: null, message: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { type: 404, message: 'Post does not exist' };

  return { type: null, message: post };
};

module.exports = {
  getAll,
  getById,
};