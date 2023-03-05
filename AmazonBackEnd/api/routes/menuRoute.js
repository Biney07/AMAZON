const express = require('express');
const menuController = require('../controllers/menuController');

const router = express.Router();

router.get('/', menuController.getMenus);
router.post('/', menuController.createMenu);
router.get('/:id', menuController.getMenuById);
router.put('/:id', menuController.updateMenu);
router.delete('/:id', menuController.deleteMenu);

module.exports = router;