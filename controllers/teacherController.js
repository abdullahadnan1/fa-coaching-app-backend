const Teacher = require("../models/teacher");

const createTeacher = async (req, res) => {
  const {
    TID,
    TCODE,
    TNAME,
    S_OF,
    GENDER,
    SALARY,
    PHONENO,
    NICNO,
    CADDRESS,
    EMAILID,
    CREATE_DATE,
    MODIFY_DATE,
    USECOUNTS,
    ACTIVE,
  } = req.body;

  try {
    await Teacher.create({
      TID,
      TCODE,
      TNAME,
      S_OF,
      GENDER,
      SALARY,
      PHONENO,
      NICNO,
      CADDRESS,
      EMAILID,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });
    res.send("Teacher added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    //Find the Teacher by Id
    const teacherInstance = await Teacher.findByPk(id);

    if (!teacherInstance) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    // Delete the Teacher
    await teacherInstance.destroy();
    return res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Error deleting teacher:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      TCODE,
      TNAME,
      S_OF,
      GENDER,
      SALARY,
      PHONENO,
      NICNO,
      CADDRESS,
      EMAILID,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    } = req.body;

    // Find the Teacher by ID
    const teacherInstance = await Teacher.findByPk(id);

    if (!teacherInstance) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Update the Teacher with the new data

    await teacherInstance.update({
      TCODE,
      TNAME,
      S_OF,
      GENDER,
      SALARY,
      PHONENO,
      NICNO,
      CADDRESS,
      EMAILID,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(200).json({
      message: "Teacher updated successfully",
      data: teacherInstance,
    });
  } catch (errro) {
    console.error("Updating Teacher error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await Teacher.findByPk(id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({
      message: "Teacher found",
      data: teacher,
    });
  } catch (error) {
    console.error("Error fetching Teacher:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();

    if (!teachers.length) {
      return res.status(404).json({ message: "Teachers not found" });
    }

    return res.status(200).json({
      message: "Teachers have found",
      data: teachers,
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return res.status(500).json({ message: "Internal server error"});
  }
};

module.exports = {
  createTeacher,
  deleteTeacher,
  updateTeacher,
  getTeacherById,
  getAllTeachers,
};
