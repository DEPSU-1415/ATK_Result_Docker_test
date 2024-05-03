const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Signup = new Schema({
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  });


module.exports = mongoose.model('Signup', Signup);


  