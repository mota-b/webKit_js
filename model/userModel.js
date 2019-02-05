// Requires
let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

// The schema
let userSchema = new Schema({
    email: {type: String, require: true, unique: true},
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
}) 

// User methodes

//Exporting the model from the schema
module.export = mongoose.model('user', userSchema)