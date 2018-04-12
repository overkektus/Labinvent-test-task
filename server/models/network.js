const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const networkSchema = new Schema({
  favorite: Boolean,
  name: String,
  strength: Number,
  security: [String]
})

const Network = mongoose.model('Network', networkSchema);

module.exports = Network;