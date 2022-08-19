const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema({

  user: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },
  winner: {
    type: Boolean
  }

});

userSchema.pre('save', function (next) {

  if (this.isNew || this.isModified('password')) {

    const document = this;
    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {

      if (err) {
        next(err);

      } else {

        document.password = hashedPassword;
        next();

      }


    });

  } else {

    next();

  }

});



//metodo para comparar

userSchema.methods.isCorrectPassword = function(Candidatepassword,callback){
  bcrypt.compare(Candidatepassword, this.password, function(err,same){

    if(err){

      callback(err);

    }else{
      callback(err,same);
   }

  });
}


module.exports = mongoose.model('User', userSchema);