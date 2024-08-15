const Class = require("../models/class"); // Import the Class model

const createClass = async (req, res) => {
  const { CID, CCODE, CDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
    req.body;

  try {
    // Create a new class record
    await Class.create({
      CID,
      CCODE,
      CDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });
    res.send("Class added successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the class by ID
    const classInstance = await Class.findByPk(id);

    if (!classInstance) {
      return res.status(404).json({ message: "class not found" }); 
    }

    // Delete the class
    await classInstance.destroy();

    return res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    console.error("Error deleting class:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { CCODE, CDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    // Find the class by ID
    const classInstance = await Class.findByPk(id);

    if (!classInstance) {
      return res.status(404).json({ message: "Class not found" });
    }

    // Update the class with the new data
    const updatedClass = await classInstance.update({
      CCODE: CCODE || classInstance.CCODE,
      CDESC: CDESC || classInstance.CDESC,
      CREATE_DATE: CREATE_DATE || classInstance.CREATE_DATE,
      MODIFY_DATE: MODIFY_DATE || new Date(),
      USECOUNTS: USECOUNTS !== undefined ? USECOUNTS : classInstance.USECOUNTS,
      ACTIVE: ACTIVE !== undefined ? ACTIVE : classInstance.ACTIVE,
    });

    return res
      .status(200)
      .json({ message: "Class Updated Successfully", data: updatedClass });
  } catch (error) {
    console.error("Error updating class:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    return res.status(200).json(classes);
  } catch (error) {
    console.error("Error Fetching Classes:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getClassById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the class by ID
    const classInstance = await Class.findByPk(id);

    if (!classInstance) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.status(200).json(classInstance);
  } catch (error) {
    console.error("Error fetching class:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getClassByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const classInstance = await Class.findOne({ where: { CCODE: code } });

    if (!classInstance) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.status(200).json(classInstance);
  } catch (error) {
    console.error('Error fetching class by CCODE:', error);
    return res.status(500).json({ message: 'Internal Server error'});
  }
};

module.exports = {
  createClass,
  deleteClass,
  updateClass,
  getAllClasses,
  getClassById,
  getClassByCode
};
