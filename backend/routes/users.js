const express = require('express')
const router = express.Router()

// GET all users
router.get('/', (req, res) => {
  res.json({msg: 'GET all users'})
})

// GET a single user
router.get('/:id', (req, res) => {
  res.json({msg: 'GET single user'})
})

// POST a new user
router.post('/', (req, res) => {
  res.json({msg: 'POST a new user'})
})

// DELETE a new user
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE a user'})
})

// UPDATE a user
router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE a new user'})
})

module.exports = router