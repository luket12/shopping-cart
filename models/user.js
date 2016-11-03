var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:  {type:  String, required: true},
    password:   {type:  String, required: true}
});


userSchema.methods.encryptPass = function(password) {
    bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPass = function(password) {
  bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);