const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Year = sequelize.define('Year', {
    YID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    YCODE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    YEARS: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    REMARKS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: true
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'years',
    timestamps: false
});

module.exports = Year;