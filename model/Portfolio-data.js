const mongoose = require('mongoose');

const portfolioDataSchema = new mongoose.Schema({
    title: String,
    price: String
});
console.log("portfolio", portfolioDataSchema.Schema);
module.exports = mongoose.model('Portfolio', portfolioDataSchema)