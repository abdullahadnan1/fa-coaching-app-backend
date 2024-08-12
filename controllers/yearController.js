const Year = require("../models/year");

const createYear = async (req, res) => {
  try {
    const {
      YCODE,
      YEARS,
      REMARKS,
      USECOUNTS,
      ACTIVE,
      CREATE_DATE,
      MODIFY_DATE,
    } = req.body;

    const date = new Date();
    const newYear = await Year.create({
      YCODE,
      YEARS,
      REMARKS,
      CREATE_DATE: CREATE_DATE || date,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(201).json({
      message: "Created Successfully",
      data: newYear,
    });
  } catch (error) {
    console.error("Error creating year:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateYear = async (req, res) => {
  try {
    const { YID } = req.params;
    const { YCODE, YEARS, REMARKS, USECOUNTS, ACTIVE, MODIFY_DATE } = req.body;

    const year = await Year.findByPk(YID);

    if (!year) {
      return res.status(404).json({ message: "Year not found" });
    }
    const date = new Date();
    // Update the year entry with new data
    year.YCODE = YCODE || year.YCODE;
    year.YEARS = YEARS || year.YEARS;
    year.REMARKS = REMARKS || year.REMARKS;
    year.USECOUNTS = USECOUNTS !== undefined ? USECOUNTS : year.USECOUNTS;
    year.ACTIVE = ACTIVE !== undefined ? ACTIVE : year.ACTIVE;
    year.MODIFY_DATE = MODIFY_DATE || date;

    await year.save();
    return res.status(200).json({
      message: "Updated Successfully",
      data: year,
    });
  } catch (error) {
    console.error("Error Updating year:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteYear = async (req, res) => {
  try {
    const { YID } = req.params;

    const year = await Year.findByPk(YID);

    if (!year) {
      return res.status(404).json({ message: "Year not found" });
    }

    await year.destroy();
    return res.status(200).json({ message: "Year deleted successfully" });
  } catch (error) {
    console.error("Error deleting year:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getYearById = async (req, res) => {
  try {
    const { YID } = req.params;

    const year = await Year.findByPk(YID);

    if (!year) {
      return res.status(404).json({ message: "Year not found" });
    }

    return res.status(200).json({
      message: "Successfully Fetched",
      data: year,
    });
  } catch (error) {
    console.error("Error fething year:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllYears = async (req, res) => {
  try {
    const years = await Year.findAll();

    return res.status(200).json({
      message: "Fetched Successfully",
      data: years,
    });
  } catch (error) {
    console.error("Error Fetching years:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getYearByCode = async (req, res) => {
  try {
    const { YCODE } = req.params;

    const year = await Year.findOne({ where: { YCODE } });

    if (!year) {
      return res.status(404).json({ message: "Year Not Found" });
    }
    return res.status(200).json({
      message: "Year Fetched Successfully",
      data: year,
    });
  } catch (error) {
    console.error("Error Fetching year by code:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createYear,
  updateYear,
  deleteYear,
  getYearById,
  getAllYears,
  getYearByCode,
};
