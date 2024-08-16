const Subject = require("../models/subject");

// Create a new subject

const createSubject = async (req, res) => {
  try {
    const { SUBCODE, SUBDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    // Create a new subject record
    const newSubject = await Subject.create({
      SUBCODE,
      SUBDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(201).json({
      message: "Subject created successfully",
      data: newSubject,
    });
  } catch (error) {
    console.error("Error creating subject:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    await subject.destroy();

    return res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { SUBCODE, SUBDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    // Find the subject by SUBID
    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    await subject.update({
      SUBCODE,
      SUBDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(200).json({
      message: "Subject updated successfully",
      data: subject,
    });
  } catch (error) {
    console.error("Error updating subject:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSubjectByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const subject = await Subject.findOne({ where: { SUBCODE: code } });

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    return res.status(200).json({
      message: "Section fetched successfully",
      data: subject,
    });
  } catch (error) {
    console.error("Error fetching subject:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
 
const getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    return res.status(200).json(subject);
  } catch (error) {
    console.error("Error fetching subject:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();

    if (!subjects.length) {
      return res.status(404).json({ message: "No Subjects Found" });
    }

    return res.status(200).json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  createSubject,
  deleteSubject,
  updateSubject,
  getSubjectByCode,
  getSubjectById,
  getAllSubjects
};
