const Dataset = require("../models/datasets");
const Program = require("../models/program");
const Concern = require("../models/concern");
const Status = require("../models/status");
const Sumber = require("../models/sumber");

module.exports.index = async(req, res) => {
    const datasets = await Dataset.find({});
    const program = await Program.find({});
    const concern = await Concern.find({});
    const status = await Status.find({});
    const sumber = await Sumber.find({});
    res.render("datasets/index", {datasets, program, concern, status, sumber});
};

module.exports.renderNewForm = (req, res) => {
    res.render("datasets/new");
};

module.exports.createNewData = async(req, res) => {
    // if (!req.body.datasets) throw new ExpressError("Invalid Data", 400);
    const dataset = new Dataset({...req.body.datasets});
    await dataset.save();
    req.flash("success", "Berhasil menambah data baru")
    res.redirect(`/datasets/`);
};

module.exports.showData = async(req, res) => {
    const {id} = req.params;
    const dataset = await Dataset.findById(id);
    if (!dataset) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/datasets");
    }
    res.render("datasets/show", {dataset}); 
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const dataset = await Dataset.findById(id);
    const program = await Program.find({});
    const concern = await Concern.find({});
    const status = await Status.find({});
    const sumber = await Sumber.find({});
    if (!dataset) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/datasets");
    }
    res.render("datasets/edit", {dataset, program, status, concern, sumber});
};

module.exports.editData = async(req, res) => {
    const {id} = req.params;
    const dataset = await Dataset.findByIdAndUpdate(id, {...req.body.datasets});
    req.flash("success", "Data peserta telah diupdate")
    res.redirect(`/datasets`);
};

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const dataset = await Dataset.findByIdAndDelete(id);
    req.flash("success", "Data peserta berhasil dihapus")
    res.redirect("/datasets");
};

module.exports.renderFormAturJadwal = async(req, res) => {
    const {id} = req.params;
    const dataset = await Dataset.findById(id);
    res.render("datasets/aturjadwal", {dataset});
}