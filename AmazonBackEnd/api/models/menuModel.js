const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  name: String,
  appetizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food',
    required: true
  },
  main_dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food',
    required: true
  },
  dessert: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  extra: String
});

const menuModel = mongoose.model('menu', menuSchema);

module.exports = menuModel;
