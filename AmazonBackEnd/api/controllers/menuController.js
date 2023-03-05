const Menu = require('../models/menuModel');
const mongoose = require('mongoose');

exports.getMenu = async (req, res) => {
  try {
    console.log(res);
    const menus = await Menu.find().populate('appetizer main_dish dessert');
    res.json(menus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
exports.createMenu = async (req, res) => {
  const { name, appetizer, main_dish, dessert, price, extra } = req.body;

  // Check if the appetizer, main_dish, and dessert fields are valid ObjectIds
  if (!mongoose.Types.ObjectId.isValid(appetizer) ||
      !mongoose.Types.ObjectId.isValid(main_dish) ||
      !mongoose.Types.ObjectId.isValid(dessert)) {
    return res.status(400).json({ msg: 'Invalid appetizer, main_dish, or dessert id' });
  }

  try {
    const menu = new Menu({
      name,
      appetizer,
      main_dish,
      dessert,
      price,
      extra
    });

    await menu.save();

    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id).populate('appetizer main_dish dessert');

    if (!menu) {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    res.json(menu);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    res.status(500).send('Server Error');
  }
};

exports.updateMenu = async (req, res) => {
  const { name, appetizer, main_dish, dessert, price, extra } = req.body;

  try {
    let menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    menu.name = name;
    menu.appetizer = appetizer;
    menu.main_dish = main_dish;
    menu.dessert = dessert;
    menu.price = price;
    menu.extra = extra;

    await menu.save();

    res.json(menu);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    res.status(500).send('Server Error');
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    await menu.remove();

    res.json({ msg: 'Menu removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    res.status(500).send('Server Error');
  }
};
