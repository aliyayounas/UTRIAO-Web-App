const CatchAsync = require('../../utils/CatchAsync');
const AppError = require('../../utils/AppError');
const User = require('../../models/User/User');

const getUser = CatchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new AppError('User not found', 404));
  await user.populate('posts').execPopulate();
  await user.populate('followers', '_id username avatarUrl').execPopulate();
  await user.populate('following', '_id username avatarUrl').execPopulate();

  res.send({ status: 'Success', data: { user, posts: user.posts } });
});

module.exports = getUser;
