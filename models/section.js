const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Section = sequelize.define('Section', {
    SECID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    SECCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SECDESC: {
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
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        // defaultValue: true,
    },
}, {
   tableName: 'sections',
   timestamps: false,
   hooks: {
    beforeUpdate: (classInstance) => {
        classInstance.MODIFY_DATE = new Date(); // Update MODIFY_DATE before saving
    }
}
}); 

module.exports = Section;