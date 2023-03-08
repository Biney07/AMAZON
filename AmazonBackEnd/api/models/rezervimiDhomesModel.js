const mongoose = require('mongoose');

const rezervimiDhomesSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  dhoma_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dhoma',
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const rezervimiDhomesModel = mongoose.model('rezervimiDhomes', rezervimiDhomesSchema);

module.exports = rezervimiDhomesModel;
