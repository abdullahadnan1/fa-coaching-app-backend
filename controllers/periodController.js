const Period = require("../models/period");

const createPeriod = async (req, res) => {
  const { YCODE, PRDMONTHS } = req.body;

  // Validate the Input
  if (!YCODE || !PRDMONTHS || !Array.isArray(PRDMONTHS)) {
    return res.status(400).json({
      error: "YCODE and PRDMONTHS (array of month-status pairs) are required",
    });
  }

  try {
    console.log("PRDMONTHS Received:", PRDMONTHS);

    // Iterate through each month and status pair
    for (const item of PRDMONTHS) {
      console.log("Processing Item:", item);

      const { month, status } = item;

      // Ensure each month and status is present
      if (!month || !status) {
        return res.status(400).json({
          error: "Each month-status pair must include month and status",
        });
      }

      // Ensure month is in the format "Month-Year" (e.g., "August-2024")
      // const [monthName, year] = month.split("-");
      // if (!monthName || !year) {
      //   return res
      //     .status(400)
      //     .json({ message: 'Month must be in "Month-Year" format' });
      // }

      // Create the period entry
      const periodData = {
        YCODE: YCODE,
        PRDMONTH: month,
        PRDSTATUS: status,
      };

      await Period.create(periodData);
    }
    res.status(201).json({ message: "Periods created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePeriod = async (req, res) => {
  const { PRDID, YCODE, PRDMONTH, PRDSTATUS } = req.body;

  // Validate the input
  if (!PRDID) {
    return res.status(400).json({ error: "PRDID is required" });
  }

  try {
    // Build the update object
    const updateFields = {};
    if (YCODE) updateFields.YCODE = YCODE;
    if (PRDMONTH) updateFields.PRDMONTH = PRDMONTH;
    if (PRDSTATUS) updateFields.PRDSTATUS = PRDSTATUS;

    // Check if there are fields to update
    if (Object.keys(updateFields).length === 0) {
      return res
        .status(400)
        .json({
          error:
            "At least one field (YCODE, PRDMONTH, PRDSTATUS) must be provided for update",
        });
    }

    // Perform the update operation
    const [updated] = await Period.update(updateFields, {
      where: { PRDID: PRDID },
    });

    if (updated) {
      res.status(200).json({ message: "Period Updated successfully" });
    } else {
      res.status(404).json({ error: "Period not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal servcer error'});
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
    const periods = await Period.findAll({
      attributes: ['PRDID', 'YEARS', 'PRDMONTH', 'PRDSTATUS', 'YCODE']
    });

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
    console.error("Error deleting period:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPeriod,
  updatePeriod,
  getPeriodById,
  getAllPeriods,
  deletePeriod,
};
