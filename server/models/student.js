import sequelize from "../dbConfig.js";
import { DataTypes } from "sequelize";

const Student = sequelize.define(
  "Student",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Student;
