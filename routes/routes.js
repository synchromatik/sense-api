const express = require('express')
const inputs = require('../models/senzori')
const router = express.Router()
const endOfDay = require('date-fns/endOfDay')
const startOfDay = require('date-fns/startOfDay')

// get all data from mongo
router.get('/senzori', async (req, res) => {
  try {
    senzori = await inputs.find({})
    senzoriLatest = await inputs.find().sort({ _id: -1 }).limit(1)
    senzoriSend = {
      'total': senzori.length,
      'latest': senzoriLatest, 
      'results': senzori
    }
    res.send(senzoriSend)
  } catch (err){
    res.send(err)
  }
})

// from DATE to DATE route, with optional senzorType
router.get('/senzori/:from/:to/:senzorType?', async (req, res) => {
  try {
    senzori = await inputs.find({
      'Date': { 
          $gt: startOfDay(new Date(req.params.from)), 
          $lt: endOfDay(new Date(req.params.to))
      }
    }, req.params.senzorType ? req.params.senzorType : '')
    senzoriSend = {
      'total' : senzori.length,
      'results' : senzori
      }
    res.send(senzoriSend)
  } catch (err) {
    res.send(err.stringValue)
  }
})

module.exports = router
