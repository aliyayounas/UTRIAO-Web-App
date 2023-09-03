const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    content: {
      type: String,
      trim: true
    },
    image: {
      type: Buffer
    },
    imagePath: {
      type: String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like',
        required: true
      }
    ],

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
);

PostSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: 'username avatarUrl'
  })
    .populate({ path: 'comments', select: '_id user createdAt updatedAt' })
    .populate({ path: 'likes', select: '_id user ' });

  next();
});

PostSchema.methods.toJSON = function() {
  const post = this;

  const postObject = post.toObject();
  delete postObject.image;
  delete postObject.__v;

  return postObject;
};

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
