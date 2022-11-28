exports.create= (req, res) => {
    return res.send({message: 'create renter'});
}

exports.findAll = (req, res) => {
    return res.send({message: 'findAll renter'});
};

exports.findOne = (req, res) => {
    return res.send({message: 'findOne renter'});
};

exports.delete = (req, res) => {
    return res.send({message: 'delete renter'});
};

exports.deleteAll = (req, res) => {
    return res.send({message: 'deleteAll renter'});
};

const RenterService = require('../services/renters.service');
const ApiError = require('../api-error');


//Create and Save new renter
exports.create = async (req, res, next) => {
    if(!req.body.name) {
        return next(new ApiError(400, 'Name canot be empty'));
    }

    try {
        const renterService = new RenterService();
        const renter = await renterService.create(req.body);
        return res.send(renter);
    }catch (error) {
        console.log(error);
        return next(
            new ApiError(500,'An error occured')
        );

    }
};

//Find all renters
exports.findAll = async (req, res, next) => {
    let renters = [];

    try {
        const renterService = new RenterService();
        const {name} = req.query;
        if (name) {
            renters = await renterService.findByName(name);
        }else{
            renters = await renterService.all();
        }
    }catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error ocurred')
        );
    }
    return res.send(renters);
};

//Find one renter
exports.findOne = async (req, res, next) => {
    try {
        const renterService =  new RenterService();
        const renter = await renterService.findById(req.params.id);
        if(!renter) {
            return next(new ApiError(404, 'Renter not found'));
        }
        return res.send(renter);
    }catch (error) {
        console.log(error);
            return next(
                new ApiError(
                    500,
                    `Error retrieving renter with id=${req.params.id}`
                )
            );
        
    }
};

//Update book
// exports.update = async (req, res, next) => {
//     if (Object.keys(req.body).length === 0) {
//         return next(new ApiError(400, 'Data to update cannot be empty'));
//     }

//     try {
//         const bookService = new BookService();
//         const updated = await bookService.update(req.params.id, req.body);
//         if(!updated) {
//             return next(new ApiError(404, 'Book not found'));
//         }
//         return res.send({message: 'Book was updated successfully'});
//     } catch (error) {
//         console.log(error);
//         return next(
//             new ApiError (500, `Error updating book with id=${req.params.id}`)
//         );
//     }
// };

//Delete books
exports.delete = async (req, res, next) => {
    try {
        const renterService = new RenterService();
        const deleted = await renterService.delete(req.params.id);
        if(!deleted) {
            return next(new ApiError(404, 'Renter not found'));
        }
        return res.send({message: 'Renter was deleted successfully'});
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete renter with id=${req.params.id}`
            )
        );
    }
};

//Delete All
exports.deleteAll = async (req, res, next) => {
    try {
        const renterService = new RenterService();
        const deleted = await renterService.deleteAll();
        return res.send({
            message: `${deleted} renters were deleted successfully`,
        });
    }catch (error) {
        console.log(error);
        return next (
            new ApiError(500, 'An error occured')
        );
    }
};


