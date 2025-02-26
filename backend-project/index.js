const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MongooseAppointment = require('./models/Appointment')
const MongooseAddDoctor = require('./data/AddDoctor')
const MongooseAddPatient = require('./patient/PatientDetails')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/appointment')

app.listen(3002, () => {
    console.log('server is running')
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    MongooseAppointment.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json('Success')
            }else{
                res.json("The Password is Incorrect")
            }
        }else{
            res.json('No record existed')
        }
    })
})

app.post('/register', (req,res) => {
    MongooseAppointment.create(req.body)
    .then(appointment => res.json(appointment))
    .catch(err => res.json(err))
})

app.post('/adddoctor', (req, res) => {
    MongooseAddDoctor.create(req.body)
    .then(adddoctor => res.json(adddoctor))
    .catch(err => res.json(err))
})

app.get("/", (req,res) =>{
    MongooseAddDoctor.find({})
    .then(adddoctor => res.json(adddoctor))
    .catch(err => res.json(err))
})

app.get('/getDoctors/:id', (req, res) => {
    const id = req.params.id 
    MongooseAddDoctor.findById({_id: id})
    .then(adddoctor => res.json(adddoctor))
    .catch(err => res.json(err))
})

app.post('/addpatient', (req, res) => {
    MongooseAddPatient.create(req.body)
    .then(addpatient => res.json(addpatient))
    .catch(err => res.json(err))
})

app.get('/addpatient', (req, res) => {
    MongooseAddPatient.find({})
    .then(addpatient => res.json(addpatient))
    .catch(err => res.json(err))
})

app.get('/addpatient/:id', (req, res) => {
    const id = req.params.id
    MongooseAddPatient.findById({_id: id})
    .then(addpatient => res.json(addpatient))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const id = req.params.id
    MongooseAddPatient.findByIdAndUpdate({_id: id}, 
    {name: req.body.name, speciality: req.body.speciality, patientName: req.body.patientName, age: req.body.age, gender: req.body.gender, date: req.body.date, time: req.body.time})
    .then(addpatient => res.json(addpatient))
    .catch(err => res.json(err))
})

app.delete('/userdelete/:id', (req,res) => {
    const id = req.params.id
    MongooseAddPatient.findByIdAndDelete({_id: id})
    .then(addpatient => res.json(addpatient))
    .catch(err => res.json(err))
})
