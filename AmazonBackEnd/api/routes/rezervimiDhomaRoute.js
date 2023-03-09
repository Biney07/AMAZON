const express = require('express');
const rezervimiDhomesController = require('../controllers/rezervimiDhomesController');

const router = express.Router();

router.get('/', rezervimiDhomesController.getRezervimeDhomash);
router.post('/', rezervimiDhomesController.createRezervimDhome);
router.get('/:id', rezervimiDhomesController.getRezervimDhomeById);
router.put('/:id', rezervimiDhomesController.updateRezervimDhome);
router.delete('/:id', rezervimiDhomesController.deleteRezervim);

module.exports = router;
