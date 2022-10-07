const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    nama: String,
});

module.exports = mongoose.model("Status", StatusSchema);