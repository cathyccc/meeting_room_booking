const Appointment = require('../models/appointmentModel')
const mongoose = require('mongoose')

const findAppointments = async (req, res) => {
  const appts = await Appointment.find()
  res.status(200).json({appointments: appts})
}

const findAppointment = async (req, res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json(
      {msg: "Appointment does not exist."}
    )
  }
  const appt = await Appointment.findById(id)
  if (!appt) return res.status(404).json({msg: "Appointment does not exist."})
  res.status(200).json({appointment: appt})
}

const createAppointment = async (req, res) => {
  const {date, timeStart, timeEnd, meetingRoom, businessName } = req.body
  try {
    const newAppt = await Appointment.create({date, timeStart, timeEnd, meetingRoom, businessName})
    res.status(200).json({appointment: newAppt})
  } catch (err) {
    res.status(404).json({msg: err.message})
  }
}

const deleteAppointment = async (req, res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json(
      {msg: "Appointment does not exist."}
    )
  }
  const appt = await Appointment.findOneAndDelete({_id: id})
  if (!appt) return res.status(404).json({msg: "Appointment does not exist."})
  res.status(200).json({appointment: appt})
}

const updateAppointment = async (req, res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json(
      {msg: "Appointment does not exist."}
    )
  }
  const appt = await Appointment.findByIdAndUpdate({_id: id}, {...req.body})
  if (!appt) return res.status(404).json({msg: "Appointment does not exist."})
  res.status(200).json({appointment: appt})
}

module.exports = {
  findAppointments,
  findAppointment,
  createAppointment,
  deleteAppointment,
  updateAppointment
}