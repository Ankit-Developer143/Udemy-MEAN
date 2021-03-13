const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

let emailLengthChecker = (email) => {
  if (!email || email.length < 5 || email.length > 30) {
    return false;
  } else {
    return true;
  }
};
let validEmailChecker = (email) =>{
  if(!email){
    return false;
  }else{
    const regExp = new regExp( /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)
    return regExp.test(email);
  }

}

const emailValidator = [
  {
    validator: emailLengthChecker,
    message: "E-mail must be at least 5 character but no more than 30",
  },
  {
    validator:validEmailChecker,
    message:"Must be Enter Valid Email"
  }
];

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: emailValidator,
  },
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, unique: true, lowercase: true },
});

//Encrypt Passwords
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
userSchema.method.comparedPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", userSchema);
