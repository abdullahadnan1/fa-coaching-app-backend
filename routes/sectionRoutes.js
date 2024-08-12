const express = require('express');
const router = express.Router();
const { createSection, deleteSection, updateSection, getSectionByCode, getAllSections } = require('../controllers/sectionController');

router.post('/', createSection);
router.delete('/:id', deleteSection);
router.put('/:id', updateSection);
router.get('/code/:code', getSectionByCode);
router.get('/', getAllSections);

module.exports = router;