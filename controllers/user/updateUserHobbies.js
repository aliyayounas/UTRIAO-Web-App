const User = require('../../models/User/User');
const { validationResult } = require('express-validator');
const CatchAsync = require('../../utils/CatchAsync');
const AppError = require('../../utils/AppError');

const updateUserHobbies = CatchAsync(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.errors.map(error => error.msg);

    return res.status(400).send({ status: 'Fail', message });
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      hobbies: req.body
    },
    { new: true }
  );

  await user.populate('posts').execPopulate();
  await user.populate('followers', '_id username avatarUrl').execPopulate();
  await user.populate('following', '_id username avatarUrl').execPopulate();

  res.send({
    status: 'Success',
    message: 'Hobbies and Interest is updated',
    data: { user, posts: user.posts }
  });
});

module.exports = updateUserHobbies;
