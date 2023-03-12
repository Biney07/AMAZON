const mongoose = require('mongoose');
const RezervimiDhomes = require('../models/rezervimiDhomesModel');

exports.getRezervimeDhomash = async (req, res) => {
  try {
    const rezervime = await RezervimiDhomes.find()
      .select('-__v')
      .exec();

    res.json(rezervime);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.createRezervimDhome = async (req, res) => {
  const { user_id, numri_dhomes, rezervim_date } = req.body;

  // Check if the numri_dhomes is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(numri_dhomes)) {
    return res.status(400).json({ msg: 'Invalid numri_dhomes' });
  }

  try {
    const rezervim = new RezervimiDhomes({
      user_id,
      numri_dhomes,
      rezervim_date
    });

    await rezervim.save();

    res.json(rezervim);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getRezervimDhomeById = async (req, res) => {
  try {
    const rezervim = await RezervimiDhomes.findById(req.params.id)
      .populate('numri_dhomes', 'name')
      .select('-__v')
      .exec();

    if (!rezervim) {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    res.json(rezervim);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    res.status(500).send('Server Error');
  }
};

exports.updateRezervimDhome = async (req, res) => {
  const { user_id, numri_dhomes, rezervim_date } = req.body;
  
  try {
    let rezervim = await RezervimiDhomes.findById(req.params.id);

    if (!rezervim) {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    rezervim.user_id = user_id;
    rezervim.numri_dhomes = numri_dhomes;
    rezervim.rezervim_date = rezervim_date;
    await rezervim.save();

    res.json(rezervim);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    res.status(500).send('Server Error');
  }
};

exports.deleteRezervimDhome = async (req, res) => {
  try {
    const rezervim = await RezervimiDhomes.findById(req.params.id);

    if (!rezervim) {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    await rezervim.remove();

    res.json({ msg: 'Rezervim removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    res.status(500).send('Server Error');
}
};

exports.deleteRezervim = async (req, res) => {
try {
const rezervim = await RezervimiDhomes.findById(req.params.id);


if (!rezervim) {
  return res.status(404).json({ msg: 'Rezervim not found' });
}

await rezervim.remove();

res.json({ msg: 'Rezervim removed' });
} catch (err) {
console.error(err.message);


if (err.kind === 'ObjectId') {
  return res.status(404).json({ msg: 'Rezervim not found' });
}

res.status(500).send('Server Error');
}
};
