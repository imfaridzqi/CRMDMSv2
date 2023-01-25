const mongoose = require("mongoose");
const Dataset = require("../models/datasets");
const mock = require("./mockData");
const Concern = require("../models/concern");
const Status = require("../models/status");
const Sumber = require("../models/sumber");
const Alumni = require("../models/alumni");
const mockAlumni = require("./mockAlumniData");

mongoose.connect("mongodb://localhost:27017/DMSDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// const seedDB = async () => {
//   await Dataset.deleteMany({});
//   for (let i = 0; i <= mock.length; i++) {
//       const dataset = new Dataset({
//           nama: mock[i].nama,
//           gender: mock[i].gender,
//           email: mock[i].email,
//           handphone: mock[i].handphone,
//           perusahaan: mock[i].perusahaan,
//           jabatan: mock[i].jabatan,
//           status: mock[i].status,
//           program: mock[i].program,
//           batch: mock[i].batch,
//           sumber: mock[i].sumber,
//           concern: mock[i].concern,
//           tglInput: mock[i].tglInput,
//           tglRefollowUp: mock[i].tglRefollowUp,
//       });
//       await dataset.save();
//   }
// }

// seedDB();

const seedAlumni = async () => {
  await Alumni.deleteMany({});
  for (let i = 0; i <= mockAlumni.length; i++) {
      const alumni = new Alumni({
          nama: mockAlumni[i].nama,
          gender: mockAlumni[i].gender,
          tempatLahir: mockAlumni[i].tempatLahir,
          tglLahir:mockAlumni[i].tglLahir,
          email: mockAlumni[i].email,
          handphone: mockAlumni[i].handphone,
          sertifikatTerkirim: mockAlumni[i].sertifikatTerkirim,
          alamat: mockAlumni[i].alamat,
          perusahaan: mockAlumni[i].perusahaan,
          pendidikan: mockAlumni[i].pendidikan,
          jurusan: mockAlumni[i].jurusan,
          universitas: mockAlumni[i].universitas,
          program: mockAlumni[i].program,
          batch: mockAlumni[i].batch,
          tglKeikutsertaan: mockAlumni[i].tglKeikutsertaan,
          tglProgram: mockAlumni[i].tglProgram,
          fotoFormal: mockAlumni[i].fotoFormal,
          fotoNonFormal: mockAlumni[i].fotoNonFormal,
          cv: mockAlumni[i].cv,
          instagram: mockAlumni[i].instagram,
          linkedin: mockAlumni[i].linkedin,
          tglUjian: mockAlumni[i].tglUjian,
          alamatPengiriman: mockAlumni[i].alamatPengiriman,
          sertifikatKeikutsertaan: mockAlumni[i].sertifikatKeikutsertaan,
          nomorSertifikatBNSP: mockAlumni[i].nomorSertifikatBNSP,
          tglCetakSertifikat: mockAlumni[i].tglCetakSertifikat,
          tglAkhirBerlakuSertifikat: mockAlumni[i].tglAkhirBerlakuSertifikat,        
          jabatan: mockAlumni[i].jabatan,
          status: mockAlumni[i].status,
          no: mockAlumni[i].no,
          property: mockAlumni[i].property,
          daerah: mockAlumni[i].daerah,
      });
      await alumni.save();
  }
}

seedAlumni();