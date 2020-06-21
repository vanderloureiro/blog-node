const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog-node');
mongoose.Promise = global.Promise;

module.exports = mongoose;