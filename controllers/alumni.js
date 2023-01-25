const Alumni = require("../models/alumni");
const Program = require("../models/program");
const moment = require("moment");

module.exports.index = async(req, res) => {
    const alumnis = await Alumni.find({});
    const program = await Program.find({});

    let totalLakiLaki = 0;
    let totalPerempuan = 0;

    const allProgram = [];
    const umur = [];
    const statusArr = [];

    const today = moment(new Date());

    for (let alumni of alumnis) {
        alumni.gender === "L" ? totalLakiLaki += 1 : totalPerempuan += 1;

        const tahunLahir = moment(alumni.tglLahir);
        umur.push(today.diff(tahunLahir, "years"));

        const statusAlumni = alumni.status;
        statusArr.push(statusAlumni);

        allProgram.push(alumni.program);
    }

    let uniqueProgram = [...new Set(allProgram)];
    let filteredProgram = uniqueProgram.filter(Boolean);

    
    // Status Alumni
    const statusCount = (arr) => {
        const status = {};
        arr.forEach((element) => {
          if (element !== undefined && element !== '') {
            status[element] = status[element] ? status[element] + 1 : 1;
          }
        });
        return status;
      };
      const resStatus = statusCount(statusArr);

      const statusKey = [];
      const statusValue = [];
      for (let key in resStatus) {
        statusKey.push(key);
        statusValue.push(resStatus[key]);
      }
    // End Status Alumni 

    // Menghitung rata-rata umur alumni
    let filteredUmur = umur.filter(value => !isNaN(value) && value !== 0);
    const initialValue = 0;
    const totalUmur = filteredUmur.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    const average = Math.floor(totalUmur / filteredUmur.length);
    // End menghitung rata rata umur alumni

    res.render("alumni/", {alumnis, program, totalLakiLaki, totalPerempuan, average, statusKey, statusValue, filteredProgram});
}

module.exports.renderNewForm = (req, res) => {
    res.render("alumni/new")
}

module.exports.createNewData = async(req, res) => {
    const alumni = new Alumni({...req.body.alumni});
    await alumni.save();
    req.flash("success", "Berhasil menambah data alumni baru")
    res.redirect(`/alumni/`);
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const alumni = await Alumni.findById(id);
    const alumnis = await Alumni.find();
    const program = await Program.find({});
    if (!alumni) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/alumni");
    }

    const allProgram = [];
    for (let alumniData of alumnis) {
      allProgram.push(alumniData.program);
    }
    let uniqueProgram = [...new Set(allProgram)];
    let filteredProgram = uniqueProgram.filter(Boolean);

    res.render("alumni/edit", {alumni, program, filteredProgram});
}

module.exports.edit = async(req, res) => {
    const {id} = req.params;
    const alumni = await Alumni.findByIdAndUpdate(id, {...req.body.alumni});
    req.flash("success", "Data alumni berhasil diupdate");
    res.redirect("/alumni/")
}

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const alumni = await Alumni.findByIdAndDelete(id);
    req.flash("success", "Data alumni telah dihapus");
    res.redirect("/alumni/");
}