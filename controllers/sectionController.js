const Section = require("../models/section");

const createSection = async (req, res) => {
  try {
    const { SECCODE, SECDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    const newSection = await Section.create({
      SECCODE,
      SECDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(201).json({
      message: "Section created successfully",
      data: newSection,
    });
  } catch (error) {
    console.error("Error creating section:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;

    const section = await Section.findByPk(id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    await section.destroy();

    return res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error("Error deleting section:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { SECCODE, SECDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    const section = await Section.findByPk(id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Update the section with the new data
    section.SECCODE = SECCODE || section.SECCODE;
    section.SECDESC = SECDESC || section.SECDESC;
    section.CREATE_DATE = CREATE_DATE || section.CREATE_DATE;
    section.MODIFY_DATE = MODIFY_DATE || section.MODIFY_DATE;
    section.USECOUNTS = USECOUNTS || section.USECOUNTS;
    section.ACTIVE = ACTIVE ?? section.ACTIVE;

    await section.save();

    return res.status(200).json({
      message: "Section updated successfully",
      data: section,
    });
  } catch (error) {
    console.error("Error updating section:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single section by SECCODE
const getSectionByCode = async (req, res) => {
  try {
    const { code } = req.params;

    // Find the section by SECCODE
    const section = await Section.findOne({ where: { SECCODE: code } });

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    return res.status(200).json({
      message: "Section fetched successfully",
      data: section,
    });
  } catch (error) {
    console.error("Error fetching section:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllSections = async (req, res) => {
  try {
    // Fetch all sections from the database
    const sections = await Section.findAll();

    return res.status(200).json({
      message: "Sections fetched successfully",
      data: sections,
    });
  } catch (error) {
    console.error('Error fetching sections:', error);
    return res.status(500).json({ message: 'Internal server error'});
  }
};

module.exports = {
  createSection,
  deleteSection,
  updateSection,
  getSectionByCode,
  getAllSections
};
