const mongoose = require("mongoose");
const Dataset = require("../models/datasets");
const mock = require("./mockData");
const Concern = require("../models/concern");
const Status = require("../models/status");
const Sumber = require("../models/sumber");


mongoose.connect("mongodb://localhost:27017/DMSDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Dataset.deleteMany({});
  for (let i = 0; i <= mock.length; i++) {
      const dataset = new Dataset({
          nama: mock[i].nama,
          email: mock[i].email,
          handphone: mock[i].handphone,
          perusahaan: mock[i].perusahaan,
          status: mock[i].status,
          program: mock[i].program,
          batch: mock[i].batch,
          sumber: mock[i].sumber,
          concern: mock[i].concern,
          tglInput: mock[i].tglInput,
          tglRefollowUp: mock[i].tglRefollowUp,
      });
      await dataset.save();
  }
}

seedDB();