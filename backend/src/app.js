const express = require('express');
const cors = require('cors');
const bookController = require('./controllers/book.controller')
const ApiError = require('./api-error');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
   res.json({ message: 'Welcome to contact book application.' });
});

app.route('/api/books')
   .get(bookController.findAll)
   .post(bookController.create)
   .delete(bookController.deleteAll);

app.route('/api/books/:sid')
   .get(bookController.findOne)
   .put(bookController.update)
   .delete(bookController.delete);

//Handle 404 response.
app.use((req, res, next) => {
   //Handler for unknown route
   //       Call next() to pass to the error handling middleware.
   return next(new ApiError(404, 'Resource not found'));
});

//Define error-handling middleware last, after other app.use() and routes calls.
app.use((error, req, res, next) => {
   //The centralized error handling middleware.
   //In any route handler, calling next(error)
   //    Will pass to this error handling middleware.
   return res.status(error.statusCode || 500).json({
      message: error.message || 'Internal server Error',
   });
});


module.exports = app;

