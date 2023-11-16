const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  timeStart: {
    type: Date,
    required: true
  },
  timeEnd: {
    type: Date,
    required: true
  },
  meetingRoom: {
    type: String,
    required: true
  },
  businessName: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Appointment', appointmentSchema)