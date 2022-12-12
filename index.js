const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const portfolioRoutes = require('./router/portfolio-data');

dotenv.config();
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log("db connect, Now you can move forword ")
)

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
);

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('api/portfolio', portfolioRoutes);

app.listen(3200, () => {
    console.log("my project is running in port number 3000");
})




















// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");

// dotenv.config();
// mongoose.set('strictQuery', false);
// // connect to db
// mongoose.connect(
//     process.env.DB_CONNECT,
//     { useUnifiedTopology: true, useNewUrlParser: true },
//     () => console.log("connected to db")
// );

// // Import routes
// const portfolioDataController = require("./router/portfolio-data");

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // route Middlewares
// app.use("/api/products", portfolioDataController);

// app.listen(3200, () => console.log("server up and runing on port 3200!"));


