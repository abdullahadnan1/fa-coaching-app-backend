const express = require('express');
const router = express.Router();
const { createYear, updateYear, deleteYear, getYearById, getAllYears, getYearByCode } = require('../controllers/yearController');

router.post('/', createYear);
router.put('/:YID', updateYear);
router.delete('/:YID', deleteYear);
router.get('/:YID', getYearById);
router.get('/', getAllYears);
router.get('/code/:YCODE', getYearByCode);

module.exports = router;