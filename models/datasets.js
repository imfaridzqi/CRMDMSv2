const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatasetSchema = new Schema(
    {
    nama: {
      type: String,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
    },
    handphone: {
      type: String,
    },
    perusahaan: {
      type: String,
    },
    jabatan: {
      type: String,
    },
    ttl: {
      type: Date,
    },
    alamat: {
      type: String,
    },
    status: {
      type: String,
    },
    program: {
      type: String,
    },
    keterangan: {
      type: String,
    },
    batch: {
      type: String,
    },
    tglInput: {
      type: Date,
    },
    sumber: {
      type: String,
    },
    concern: {
      type: String,
    },
    tglRefollowUp: {
      type: Date,
    },
    nomorSertifikat: {
      type: String,
    },
    tglTerbitSertifikat: {
      type: Date,
    }
  },
  {timestamps: true}
  );

  module.exports = mongoose.model("Datasets", DatasetSchema);