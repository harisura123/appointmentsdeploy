const mongoose = require('mongoose')

const AddPatient = new mongoose.Schema({
    name: String,
    speciality: String,
    patientName: String,
    age: String,
    gender: String,
    date: String,
    time: String
})

const MongooseAddPatient = mongoose.model("addpatient", AddPatient)
 
module.exports = MongooseAddPatient
