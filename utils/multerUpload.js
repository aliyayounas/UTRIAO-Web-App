const multer = require('multer');
const AppError = require('./AppError');

const upload = multer({
  limits: {
    fileSize: 1000000,
    onError: function(err, next) {
      return next(new AppError('File Size too large', 400));
    }
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new AppError('Please upload image file', 400));
    }

    cb(undefined, true);
  }
});

module.exports = upload;
