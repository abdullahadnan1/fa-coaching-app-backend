const express = require('express');
const router = express.Router();
const { createTeacher, deleteTeacher, updateTeacher, getTeacherById, getAllTeachers } = require('../controllers/teacherController');

router.post('/', createTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher);
router.get('/:id', getTeacherById);
router.get('/', getAllTeachers);


module.exports = router;
