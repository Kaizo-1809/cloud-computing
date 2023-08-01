const mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    price: Number,
    quantity: Number
});

var BookModels = mongoose.model("sach", BookSchema, "book");
module.exports = BookModels;