import sequelize from "../dbConfig.js";
import { DataTypes } from "sequelize";

const Student = sequelize.define(
  "Student", // referring to the table name in the db
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Student;
