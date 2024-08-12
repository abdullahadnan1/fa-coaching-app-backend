const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Period = sequelize.define('Period', {
    PRDID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    YEARS: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    YID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PRDMONTH: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRDESC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRDSTDATE: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    PRDEDDATE: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    PRDSTATUS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRDSTATUSDESC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: false,
    tableName: 'periods',
});

module.exports = Period;