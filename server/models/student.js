// import sequelize from "../dbConfig.js";
// import { DataTypes } from "sequelize";

// const Student = sequelize.define(
//   "Student", // referring to the table name in the db
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

// Student.sync({ alter: true })
//   .then(() => {
//     return Student.create({
//       firstName: "Katia",
//       lastName: "Bezzina",
//       age: 25,
//     });
//   })
//   .then((data) => {
//     console.log("New Student created");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// export default Student;
