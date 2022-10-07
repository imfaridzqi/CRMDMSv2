const Status = require("../models/status");

module.exports.index = async(req, res) => {
    const status = await Status.find({});
    res.render("status", {status});
};

module.exports.create = async(req, res) => {
    const status = new Status(req.body.status);
    await status.save();
    req.flash("success", "Berhasil menambah status baru");
    res.redirect("/status");
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const status = await Status.findById(id);
    if (!status) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/status");
    }
    res.render("status/edit", {status});
};

module.exports.edit = async(req, res) => {
    const {id} = req.params;
    const status = await Status.findByIdAndUpdate(id, {...req.body.status});
    req.flash("success", "Status berhasil diupdate");
    res.redirect("/status");
};

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const status = await Status.findByIdAndDelete(id);
    req.flash("success","Status berhasil dihapus");
    res.redirect("/status");
};