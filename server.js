const express = require('express');

const ConnectDb = require('./config/database');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const ErrorMiddleware = require('./middleware/Error');
const AppError = require('./utils/AppError');

process.on('uncaughtException', err => {
  console.log(`Uncaught Exceptions ==> ${err.name} ${err.message}   `);

  console.log('Server is shutting down');
  process.exit();
});

const app = express();

const PORT = process.env.PORT || 5000;

ConnectDb();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(
    `<h1 style="text-align:center; margin-top:40vh">Welcome to Utriao API</h1>`
  );
});
app.use(userRoutes);
app.use(postRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(ErrorMiddleware);

const server = app.listen(PORT, () =>
  console.log(`Server is up on Port ${PORT}`)
);

process.on('unhandledRejection', err => {
  console.log(`Unhandled Rejections ==> ${err.name} ${err.message} `);
  console.log('Server is shutting down');
  server.close(() => {
    process.exit(1);
  });
});
