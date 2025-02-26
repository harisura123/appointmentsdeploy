const mongoose = require("mongoose")

const Appointment = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const MongooseAppointment = mongoose.model("appointment", Appointment)

module.exports = MongooseAppointment 
