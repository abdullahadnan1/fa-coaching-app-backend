const Period = require("../models/period");

const createPeriod = async (req, res) => {
  try {
    const {
      YEARS,
      YID,
      PRDMONTH,
      PRDESC,
      PRDSTDATE,
      PRDEDDATE,
      PRDSTATUS,
      PRDSTATUSDESC,
      CREATE_DATE,
      MODIFY_DATE,
    } = req.body;

    const newPeriod = await Period.create({
      YEARS,
      YID,
      PRDMONTH,
      PRDESC,
      PRDSTDATE,
      PRDEDDATE,
      PRDSTATUS,
      PRDSTATUSDESC,
      CREATE_DATE: CREATE_DATE ? new Date(CREATE_DATE) : new Date(),
      MODIFY_DATE: MODIFY_DATE ? new Date(MODIFY_DATE) : new Date(),
    });

    return res.status(201).json({
      message: "Created Successfully",
      data: newPeriod,
    });
  } catch (error) {
    console.error("Error creating Period:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePeriod = async (req, res) => {
  try {
    const { PRDID } = req.params;
    const {
      YEARS,
      YID,
      PRDMONTH,
      PRDESC,
      PRDSTDATE,
      PRDEDDATE,
      PRDSTATUS,
      PRDSTATUSDESC,
      CREATE_DATE,
      MODIFY_DATE,
    } = req.body;

    const period = await Period.findByPk(PRDID);

    if (!period) {
      return res.status(404).json({ message: "Period not found" });
    }

    const updatedPeriod = await period.update({
      YEARS,
      YID,
      PRDMONTH,
      PRDESC,
      PRDSTDATE,
      PRDEDDATE,
      PRDSTATUS,
      PRDSTATUSDESC,
      CREATE_DATE: CREATE_DATE ? new Date(CREATE_DATE) : period.CREATE_DATE,
      MODIFY_DATE: MODIFY_DATE ? new Date(MODIFY_DATE) : new Date(),
    });

    return res.status(200).json({
      message: "Updated Successfully",
      data: updatedPeriod,
    });
  } catch (error) {
    console.error("Error Updating period:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPeriodById = async (req, res) => {
  try {
    const { PRDID } = req.params;

    const period = await Period.findByPk(PRDID);

    if (!period) {
      return res.status(404).json({ message: "Period not found" });
    }

    return res.status(200).json({
      message: "Fetched Successfully",
      data: period,
    });
  } catch (error) {
    console.error("Error Fetching Period:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllPeriods = async (req, res) => {
  try {
    const periods = await Period.findAll();

    return res.status(200).json({
      message: "Fetched Successfully",
      data: periods,
    });
  } catch (error) {
    console.error("Error fetching Periods:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deletePeriod = async (req, res) => {
  try {
    const { PRDID } = req.params;

    const period = await Period.findByPk(PRDID);

    if (!Period) {
      return res.status(404).json({ message: "Period Not Found." });
    }

    await period.destroy();

    return res.status(200).json({ message: "Period deleted successfully" });
  } catch (error) {
    console.error('Error deleting period:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPeriod,
  updatePeriod,
  getPeriodById,
  getAllPeriods,
  deletePeriod,
};
