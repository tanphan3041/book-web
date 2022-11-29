const express = require('express');
const cors = require('cors');
const bookController = require('./controllers/books.controllers');
const rentersController = require('./controllers/renters.controllers');
// const rentController = require('./controllers/rent.controllers');
const ApiError = require('./api-error');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message:'Welcome to Library.'});
});

app.route('/api/books')
    .get(bookController.findAll)
    .post(bookController.create)
    .delete(bookController.deleteAll);
app.route('/api/books/favorite').get(bookController.findAllFavorite);

app.route('/api/books/:id(\\d+)')
    .get(bookController.findOne)
    .put(bookController.update)
    .delete(bookController.delete);

app.route('/api/renters')
    .get(rentersController.findAll)
    .post(rentersController.create)
    .delete(rentersController.deleteAll);

app.route('/api/renters/:id(\\d+)')
    .get(rentersController.findOne)
    .delete(rentersController.delete);

// app.route('/api/rent')
//    .post(rentController.addRent)

// app.route('/api/rent/:rentid(\\d+)')
//    .delete(rentController.deleteRent)
//    .get(rentController.findRent)


// Handle 404 response.
app.use((req, res, next) => {
    // Handler for unknown route.
    // Call next() to pass to the error handling middleware.
        return next(new ApiError(404, 'Resource not found'));
    });
    // Define error-handling middleware last, after other app.use() and routes calls.
    app.use((err, req, res, next) => {
    
    // The centralized error handling middleware.
    // In any route handler, calling next(error)
    // will pass to this error handling middleware.
        return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
        });
    });
    

module.exports = app;