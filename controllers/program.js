const Program = require("../models/program");

module.exports.index = async (req, res) => {
    const program = await Program.find({});
    res.render("program", {program});
};

module.exports.create = async(req, res) => {
    const program = new Program(req.body.program);
    await program.save();
    req.flash("success", "Berhasil menambah program baru")
    res.redirect("/program");
};

module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const program = await Program.findById(id);
    if (!program) {
        req.flash("error", "Data tidak ditemukan atau telah dihapus");
        return res.redirect("/program");
    }
    res.render("program/edit", {program});
};

module.exports.edit = async(req, res) => {
    const {id} = req.params;
    const program = await Program.findByIdAndUpdate(id, {...req.body.program});
    req.flash("success", "Berhasil edit program");
    res.redirect("/program/");
};

module.exports.delete = async(req, res) => {
    const {id} = req.params;
    const program = await Program.findByIdAndDelete(id);
    req.flash("success", "Program berhasil dihapus");
    res.redirect("/program");
};