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
        allowNull: true,
    },
    YID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    PRDMONTH: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRDESC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    PRDSTDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    PRDEDDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    PRDSTATUS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRDSTATUSDESC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    YCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: false,
    tableName: 'periods',
    hooks: {
        beforeCreate: (period, options) => {
         period.CREATE_DATE = new Date();
        },
        beforeUpdate: (period, options) => {
            period.MODIFY_DATE = new Date();
        }
    }
});

module.exports = Period;