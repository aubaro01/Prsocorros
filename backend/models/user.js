const connection = require('../Config/db');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (nome, circuito) VALUES (?, ?)';
    connection.query(query, [userData.nome, userData.circuito], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = User;