const Sumber = require("../models/sumber");

module.exports.index = async(req, res) => {
    const sumber = await Sumber.find({});
    res.render("sumber", {sumber});
};

module.exports.create = async (req, res) => {
    const sumber = new Sumber(req.body.sumber);
    await sumber.save();
    req.flash("success", "Berhasil menambah sumber baru");
    res.redirect("/sumber");
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const sumber = await Sumber.findById(id);
    if (!sumber) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/sumber");
    }
    res.render("sumber/edit", {sumber});
};

module.exports.edit = async(req, res) => {
    const {id} = req.params;
    const sumber = await Sumber.findByIdAndUpdate(id, {...req.body.sumber});
    req.flash("success", "Sumber berhasil diupdate")
    res.redirect("/sumber");
};

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const sumber = await Sumber.findByIdAndDelete(id);
    req.flash("success","Sumber berhasil dihapus");
    res.redirect("/sumber");
};