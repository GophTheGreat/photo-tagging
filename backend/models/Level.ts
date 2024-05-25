const mongoose = require('mongoose');
const characters = require('./Character')

const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  imageURL: {type: String, required: true},
  characters: [characters],
  name: {type: String},
  parTime: {type: Number, default: 0}
})

module.exports = mongoose.model("Level", LevelSchema);
export{};