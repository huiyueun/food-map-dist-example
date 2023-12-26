const { pool } = require("../../config/database");

exports.selectRestaurants = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A';`;

  //const selectStudentQueryByNameQuery = `SELECT * FROM Students where studentName = ?;`;
  const selectRestaurantsQueryByCategoryQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A' and category = ?;`;
  const Params = [category];

  let Query = category ? selectRestaurantsQueryByCategoryQuery : selectAllRestaurantsQuery;
  const rows = await connection.query(Query, Params);
  return rows;
};

exports.deleteStudent = async function (connection, studentIdx) {
  const Query = `update Students set status = "D" where studentIdx = ? and status = 'A';`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};


exports.updateStudents = async function (connection, studentIdx, connection, studentName, major, birth, address) {
  const Query = `update Students set studentName = ifnull(?, ), major = ifnull(?, ), birth = ifnull(?, ), address = ifnull(?, ) where studentIdx = 3;`;
  const Params = [studentName, major, birth, address, studentIdx];

  const rows = await connection.query(Query, Params);
  return rows;
};

exports.isValidStudentIdx = async function (connection, studentIdx) {
  const Query = `SELECT * FROM Students where studentIdx = ?;`;
  const Params = [];

  const rows = await connection.query(Query, Params);
  if (rows < 1) {
    return false
  }
  return true;
};

exports.insertStudents = async function (connection, studentName, major, birth, address) {
  const Query = `insert into Students(studentName, major, birth, address) values (?, ?, ?, ?);`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectStudents = async function (connection, studentIdx) {
  const selectAllStudentQuery = `SELECT * FROM Students;`;

  //const selectStudentQueryByNameQuery = `SELECT * FROM Students where studentName = ?;`;
  const selectStudentQueryByNameQuery = `SELECT * FROM Students where studentIdx = ?;`;
  const Params = [studentIdx];

  let Query = studentIdx ? selectStudentQueryByNameQuery : selectAllStudentQuery;
  const rows = await connection.query(Query, Params);

  return rows;
};

exports.exampleDao = async function (connection) {
  const Query = `SELECT * FROM Students;`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};
