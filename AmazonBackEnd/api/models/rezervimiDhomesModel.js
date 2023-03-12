const mongoose = require('mongoose');

const rezervimiDhomesSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  numri_dhomes: {
    type: Number,
    ref: 'dhoma',
    required: true
  },
  rezervim_date: {
    type: Date,
    
  }
});

const rezervimiDhomesModel = mongoose.model('rezervimiDhomes', rezervimiDhomesSchema);

module.exports = rezervimiDhomesModel;
