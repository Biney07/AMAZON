const mongoose = require('mongoose');
const RezervimiDhomes = require('../models/rezervimiDhomesModel');

exports.getRezervimeDhomash = async (req, res) => {
  try {
    const rezervime = await RezervimiDhomes.find()
      .populate('dhoma_id', 'name')
      .select('-__v')
      .exec();

    res.json(rezervime);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createRezervimDhome = async (req, res) => {
  const { user_id, dhoma_id } = req.body;

  // Check if the dhoma_id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(dhoma_id)) {
    return res.status(400).json({ msg: 'Invalid dhoma_id' });
  }

  try {
    const rezervim = new RezervimiDhomes({
      user_id,
      dhoma_id,
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
      .populate('dhoma_id', 'name')
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
  const { user_id, dhoma_id } = req.body;

  try {
    let rezervim = await RezervimiDhomes.findById(req.params.id);

    if (!rezervim) {
      return res.status(404).json({ msg: 'Rezervim not found' });
    }

    rezervim.user_id = user_id;
    rezervim.dhoma_id = dhoma_id;

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
