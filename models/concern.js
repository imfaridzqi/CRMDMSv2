const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConcernSchema = new Schema({
    nama: String,
});

module.exports = mongoose.model("Concern", ConcernSchema);