const mongoose = require('mongoose');


const userExercSchema = new mongoose.Schema({
  id_Exer_fk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exer', 
    required: true, 
  },
  id_User_fk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true, 
  },
  exer_res: {
    type: String,
    enum: ['Feito', 'Não'], 
    default: 'Não', 
  },
}, { versionKey: false }); 


const UserExerc = mongoose.model('UserExerc', userExercSchema);


module.exports = UserExerc;

