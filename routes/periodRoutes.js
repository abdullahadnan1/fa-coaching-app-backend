const express = require('express');
const router = express.Router();
const { createPeriod, updatePeriod, getPeriodById, getAllPeriods, deletePeriod } = require('../controllers/periodController');


router.post('/', createPeriod);
router.put('/', updatePeriod);
router.get('/:PRDID', getPeriodById);
router.get('/', getAllPeriods);
router.delete('/:PRDID', deletePeriod);


module.exports = router;