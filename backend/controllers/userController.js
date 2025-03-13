const express = require('express');
const router = express.Router();
const User = require('./models/User');

const UserController = {
  create: (userData, callback) => {
    const newUser = new User({
      nome: userData.nome,
      circuito: userData.circuito,
    });

    newUser.save((err, savedUser) => {
      if (err) {
        return callback(err);
      }
      callback(null, savedUser);
    });
  }
};

module.exports = UserController;