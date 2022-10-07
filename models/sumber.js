const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SumberSchema = new Schema({
    nama: String,
});

module.exports = mongoose.model("Sumber", SumberSchema);