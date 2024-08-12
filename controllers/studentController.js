const Student = require("../models/student");

const createStudent = async (req, res) => {
  try {
    const studentData = req.body;

    const newStudent = await Student.create(studentData);

    return res.status(201).json({
      message: "Student created successfully",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    await student.destroy();
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    await student.update(updatedData);
    return res.status(200).json({
      message: "Student updated successfully",
      student: student,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const student = await Student.findOne({ where: { SCODE: code } });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.error("Error Fetching Student:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    return res.status(200).json(students);
  } catch (error) {
     console.error('Error Fetching students:', error);
     return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createStudent,
  deleteStudent,
  updateStudent,
  getStudentByCode,
  getStudentById,
  getAllStudents
};
