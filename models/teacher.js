const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Teacher = sequelize.define("Teacher", {
  TID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TCODE: {
    type: DataTypes.STRING,
  },
  TNAME: {
    type: DataTypes.STRING,
  },
  S_OF: {
    type: DataTypes.STRING,
  },
  GENDER: {
    type: DataTypes.STRING,
  },
  SALARY: {
    type: DataTypes.FLOAT,
  },
  PHONENO: {
    type: DataTypes.STRING,
  },
  NICNO: {
    type: DataTypes.STRING,
  },
  CADDRESS: {
    type: DataTypes.STRING,
  },
  EMAILID: {
    type: DataTypes.STRING,
  },
  CREATE_DATE: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  MODIFY_DATE: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  USECOUNTS: {
    type: DataTypes.INTEGER,
  },
  ACTIVE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
},{
    tableName: 'teachers',
    timestamps: false,
});

module.exports = Teacher;
