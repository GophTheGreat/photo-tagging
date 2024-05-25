"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    score: { type: Number, required: true },
    name: { type: String }
});
module.exports = mongoose.model("Score", ScoreSchema);
