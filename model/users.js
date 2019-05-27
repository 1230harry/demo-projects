var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userid: String,
    firstname: String,
    lastname: String,
    age: Number,
    Address: String,
    email: String,
    password: String
});

