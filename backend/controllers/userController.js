const User = require('../models/userModel')
const mongoose = require('mongoose')

const getUsers = async (req, res) => {
  const allUsers = await User.find().sort({createdAt: -1})
  res.status(200).json(allUsers)
}

const getUser = async (req,res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json(
      {msg: "User does not exist."}
    )
  }
  const user = await User.findById(id)
  if (!user) return res.status(404).json({msg: "User does not exist."})
  res.status(200).json({user: user})
}

const createUser = async (req, res) => {
  console.log(req.body)
  const { username, password, businessName } = req.body
  try {
    const newUser = await User.create({ username, password, businessName})
    res.status(200).json({user: newUser})
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

const updateUser = async (req, res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({msg: "User does not exist."})
  }
  const user = await User.findOneAndUpdate({_id: id}, {...req.body})
  if (!user) return res.status(404).json({msg: "User does not exist."})
  res.status(200).json({user: user})
}

const deleteUser = async (req, res) => {
  const {id} = req.params
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({msg: "User does not exist."})
  }
  const user = await User.findOneAndDelete({_id: id})
  if (!user) return res.status(404).json({msg: "User does not exist."})
  res.status(200).json({user: user})
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}