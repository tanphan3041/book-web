const BookService = require('../services/book_service');
const ApiError = require('../api-error');


exports.findOne = async (req, res, next) => {
   try {
      const bookService  = new BookService();
      const book = await bookService.findById(req.params.sid);
      if (!book) {
         return next(new ApiError(404, 'Book not found'));
      }
      return res.send(book);
   } catch (error) {
      console.log(error)
      return next(
         new ApiError(
            500, `Error retrieving book with id=${req.params.sid}`
         )
      );
   }
};

exports.update = async (req, res, next) => {
   if (Object.keys(req.body).length === 0) {
      return next(new ApiError(400, 'Data to update can not be empty'));
   }

   try {
      const bookService = new BookService();
      const updated = await bookService.update(req.params.sid, req.body);
      if (!updated) {
         return next(new ApiError(404, 'Book not found'));
      }
      return res.send({ message: 'Book was updated successfully' });
   } catch (error) {
      console.log(error);
      return next(
         new ApiError(500, `Error updateing book with id=${req.params.id}`)
      );
   }
};

exports.delete = async (req, res, next) => {
   try {
      const bookService = new BookService();
      const deleted = await bookService.delete(req.params.sid);
      if (!deleted) {
         return next(new ApiError (404, 'COntact not found'));
      }
      return res.send({ message: 'Book was deleted successfully' });
   } catch (error) {
      console.log(error);
      return next(new ApiError (500, `Could not delete book with sid=${req.params.sid}`));
   }
};

exports.deleteAll = async (req, res, next) => {
   try {
      const bookService = new BookService();
      const deleted = await bookService.deleteAll();
      return res.send({ message: `${deleted} books were deleted successfully`, });
   } catch (error) {
      console.log(error);
      return next(new ApiError(500, 'An error occurred while removing all books'));
   }
};

// exports.findAllFavorite = async (req, res, next) => {
//    try {
//       const bookService = new BookService();
//       const books = await bookService.allFavorite();
//       return res.send(books);
//    } catch (error) {
//       console.log(error);
//       return next (new ApiError (500, 'An error occurred while retrieving favorite books'));
//    }
// };

exports.create = async (req, res, next) => {
   console.log(req.body);
   if (!req.body?.Tua_sach) {
      return next(new ApiError(400, 'Name can not be empty'));
   }

   try {
      const bookService = new BookService();
      const books = await bookService.create(req.body);
      return res.send(books);
   } catch (error) {
      console.log(error);
      return next(
         new ApiError(500, 'An error occurred while creating the book')
      );
   }
};

exports.findAll = async (req, res, next) => {
   let books = [];

   try {
      const bookService = new BookService();
      const { Tua_sach } = req.query;
      if (Tua_sach) {
         books = await bookService.findByName(Tua_sach);
      } else {
         books = await bookService.all();
      }
   } catch (error) {
      console.log(error);
      return next(
         new ApiError(500, 'An error occurred while retrieving books')
      );
   }

   return res.send(books);
};
