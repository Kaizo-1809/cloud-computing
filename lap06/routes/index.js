var express = require('express');
const BookModels = require('../models/bookModels');
var router = express.Router();


router.get('/', async(req, res) => {
  var books = await BookModels.find();
  //console.log(books);
  res.send(books);
  //res.render('book_list');
});

module.exports = router;
