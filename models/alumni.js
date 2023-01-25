const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
    nama: {
        type:String,
    },
    gender: {
        type: String,
    },
    tempatLahir: {
        type: String,
    },
    tglLahir: {
        type: Date,
    },
    email: {
        type:String,
    },
    handphone: {
        type: String,
    },
    sertifikatTerkirim: {
        type:String,
    },
    alamat: {
        type:String,
    },
    perusahaan: {
        type: String,
    },
    pendidikan: {
        type: String,
    },
    jurusan: {
        type: String,
    },
    universitas: {
        type: String,
    },
    program: {
        type: String,
    },
    batch: {
        type: String,
    },
    tglKeikutsertaan: {
        type: Date,
    },
    tglProgram: {
        type: Date,
    },
    fotoFormal: {
        type: String,
    },
    fotoNonFormal: {
        type: String,
    },
    cv: {
        type: String,
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    tglUjian: {
        type: Date,
    },
    alamatPengiriman: {
        type: String,
    },
    sertifikatKeikutsertaan: {
        type: String,
    },
    nomorSertifikatBNSP: {
        type: String,
    },
    tglCetakSertifikat: {
        type: Date,
    },
    tglAkhirBerlakuSertifikat: {
        type: Date,
    },
    jabatan: {
        type: String,
    },
    status: {
        type: String,
    },
    no: {
        type: String,
    },
    property: {
        type: String,
    },
    daerah: {
        type: String,
    }
});

module.exports = mongoose.model("Alumni", AlumniSchema);