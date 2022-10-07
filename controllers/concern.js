const Concern = require("../models/concern");

module.exports.index = async(req, res) => {
    const concern = await Concern.find({});
    res.render("concern", {concern});
};

module.exports.createConcern = async(req, res) => {
    const concern = new Concern(req.body.concern);
    await concern.save();
    req.flash("success", "Berhasil menambah concern")
    res.redirect("/concern");
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const concern = await Concern.findById(id);
    if (!concern) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/concern");
    }
    res.render("concern/edit", {concern});
};

module.exports.edit = async(req, res) => {
    const {id} = req.params;
    const concern = await Concern.findByIdAndUpdate(id, {...req.body.concern});
    req.flash("success", "Berhasil edit concern")
    res.redirect("/concern");
};

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const concern = await Concern.findByIdAndDelete(id);
    req.flash("success", "Concern berhasil dihapus")
    res.redirect("/concern");
};