require('dotenv').config();
const app = require('./src/app');


// const express = require("express");
// const cors = require("cors");

// var corsOptions = {
//   origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// const db = require("./src/models");

// const Role = db.role;


// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }

// require('./src/routes/auth.routes')(app);
// require('./src/routes/user.routes')(app);

// start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});