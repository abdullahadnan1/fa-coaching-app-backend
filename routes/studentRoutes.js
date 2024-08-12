const express = require('express');
const router = express.Router();
const { createStudent, deleteStudent, updateStudent, getStudentByCode, getStudentById,  getAllStudents } = require('../controllers/studentController');

router.post('/', createStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);
router.get('/code/:code', getStudentByCode);
router.get('/:id', getStudentById);
router.get('/',  getAllStudents);

module.exports = router;