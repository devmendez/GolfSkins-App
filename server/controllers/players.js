const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllPlayers = (req, res) => {
  console.log(res, "req")
  pool.query("SELECT * FROM players", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getPlayerById = (req, res) => {
  let sql = "SELECT * FROM players WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createPlayer = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "INSERT INTO players (first_name, last_name) VALUES (?, ?)"
  sql = mysql.format(sql, [ firstName, lastName ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updatePlayerById = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE players SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deletePlayerByFirstName = (req, res) => {
  let sql = "DELETE FROM players WHERE first_name = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} player(s)` });
  })
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayerById,
  deletePlayerByFirstName
}