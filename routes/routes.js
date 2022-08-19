const express = require('express')
const inputs = require('../models/senzori')
const router = express.Router()

router.get('/senzori', async (req, res, next) => {
  try {
    senzori = await inputs.find({})
    res.send(senzori)
  } catch {
    res.send({error: 'empty'})
  }
})

router.get('/senzori/:from-:to', async (req, res, next) => {
  try {
    senzori = await inputs.find({'Temp': { $gt: req.params.from, $lt: req.params.to }}, 'Temp, Date')
    res.send(senzori)
  } catch {
    res.send({error: 'empty'})
  }
})

module.exports = router
