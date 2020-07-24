const mongoose = require('mongoose')
const shortid = require('shortid')

const exerciseSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  title: String,
  image: String,
  description: String,
  type: String,
  equipment: String,
  count: Number,
})

module.exports = mongoose.model('Exercise', exerciseSchema)
