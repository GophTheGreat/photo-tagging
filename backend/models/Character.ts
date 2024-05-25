const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {type: String, required: true},
  level: {type: Schema.types.ObjectId, ref: "Level", required: true},
  upperLeftCorner: {type: Number, required: true},
  bottomRightCorner: {type: Number, required: true}
})

module.exports = mongoose.model("Character", CharacterSchema);

export{};