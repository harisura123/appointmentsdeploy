const mongoose = require('mongoose')

const AddDoctor = new mongoose.Schema({
    image: String,
    name: String,
    speciality: String,
    email: String,
    degree: String,
    experience: String,
    fees: String,
    about: String
})

const MongooseAddDoctor = mongoose.model("adddoctor", AddDoctor)
 
module.exports = MongooseAddDoctor
