const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Student = sequelize.define('Student', {
    SID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    SCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SNAME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    S_OF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    GENDER: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BATCHCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SUBJECTCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    FEES_AMOUNT: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    ADM_FEE: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    PHONENO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NICNO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EMAILID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    CADDRESS: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'students',
    timestamps: false
});

module.exports = Student;