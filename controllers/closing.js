const Datasets = require("../models/datasets");

module.exports.index = async(req, res) => {
    const datasets = await Datasets.find({});
    const dataLeadsSDM = [];
    const dataLeadsSSM = [];
    const dataLeadsHRM = [];

    for (let data of datasets) {
        if (data.program === "Sertifikasi Digital Marketing") {
            if (data.status === "Closing") {
                dataLeadsSDM.push(data);
            }
        }

        if (data.program === "Sertifikasi Social Media") {
            if (data.status === "Closing") {
                dataLeadsSSM.push(data);
            }
        }

        if (data.program === "Human Resource Manager") {
            if (data.status === "Closing") {
                dataLeadsHRM.push(data);
            }
        }
    }
    res.render("closing/", {dataLeadsSDM, dataLeadsSSM, dataLeadsHRM})
}