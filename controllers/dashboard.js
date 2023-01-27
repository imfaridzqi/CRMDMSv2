const Datasets = require("../models/datasets");
const Program = require("../models/program");

module.exports.index = async(req, res) => {
    const datasets = await Datasets.find({});
    const program = await Program.find({});
    const programCari = req.body.namaProgram;
    const tahun = req.body.tahun;
    const batch = req.body.batch;

    const totalLeads = datasets.length;
    const closingLeads = [];
    let totalClosingLeads = 0;
    const dataLeadsSDM = [];
    const dataLeadsSSM = [];
    const dataLeadsHRM = [];
    const dataLeadsInhouse = [];

    // Get Total Leads and Closing Leads Each Program
    let result = [];

    datasets.forEach(item => {
        let program = item.program;
        let status = item.status;
        let found = result.find(r => r.name === program);
        if (!found) {
            result.push({ name: program, count: 1, closing: status === 'Closing' ? 1 : 0 });
        } else {
            found.count++;
            if(status === 'Closing') found.closing++;
        }
    });

    console.log(result)
    // --------------------------------------------------

    for (let dataset of datasets) {
        if (dataset.status === "Closing") {
            closingLeads.push(dataset);
        }
        totalClosingLeads = closingLeads.length;

        if (dataset.program == "Sertifikasi Digital Marketing" && dataset.status == "Closing") {
            dataLeadsSDM.push(dataset);
        }

        if (dataset.program === "Sertifikasi Social Media") {
            if (dataset.status === "Closing") {
                dataLeadsSSM.push(dataset);
            }
        }

        if (dataset.program === "Human Resource Manager") {
            if (dataset.status === "Closing") {
                dataLeadsHRM.push(dataset);
            }
        }

        if (dataset.program === "In House Training") {
            if (dataset.status === "Closing") {
                dataLeadsInhouse.push(dataset);
            }
        }
    }

//     let closingLeadsObj = datasets.filter(item => item.status === 'Closing')
//   .reduce((acc, curr) => {
//     let program = curr.program;
//     if (!acc[program]) {
//       acc[program] = { program, data: [] };
//     }
//     acc[program].data.push(curr);
//     return acc;
//   }, {});

//   let closingLeadsArr = Object.values(closingLeadsObj);
//     for (let i = 0; i < closingLeadsArr.length; i++) {
//     console.log(`Data in ${closingLeadsArr[i].program}:`, closingLeadsArr[i].data);
//     }

    // Chart
    const jan = [];
    const feb = [];
    const mar = [];
    const apr = [];
    const may = [];
    const jun = [];
    const jul = [];
    const aug = [];
    const sep = [];
    const oct = [];
    const nov = [];
    const dec = [];

    for (let data of datasets) {
        const month = new Date(data.tglInput).getMonth() + 1;
        const year = new Date(data.tglInput).getFullYear();
        if (data.program == programCari) {
            if (batch) {
                if (data.batch == batch) {
                    if (year == tahun) {
                        if (month == 1) {
                            jan.push(data)
                        } else if (month == 2) {
                            feb.push(data);
                        } else if (month == 3) {
                            mar.push(data);
                        } else if (month == 4) {
                            apr.push(data);
                        } else if (month == 5) {
                            may.push(data);
                        } else if (month == 6) {
                            jun.push(data);
                        } else if (month == 7) {
                            jul.push(data);
                        } else if (month == 8) {
                            aug.push(data);
                        } else if (month == 9) {
                            sep.push(data);
                        } else if (month == 10) {
                            oct.push(data);
                        } else if (month == 11) {
                            nov.push(data)
                        } else if (month == 12) {
                            dec.push(data)
                        }
                    }
                }
            } else {
                if (year == tahun) {
                    if (month == 1) {
                        jan.push(data)
                    } else if (month == 2) {
                        feb.push(data);
                    } else if (month == 3) {
                        mar.push(data);
                    } else if (month == 4) {
                        apr.push(data);
                    } else if (month == 5) {
                        may.push(data);
                    } else if (month == 6) {
                        jun.push(data);
                    } else if (month == 7) {
                        jul.push(data);
                    } else if (month == 8) {
                        aug.push(data);
                    } else if (month == 9) {
                        sep.push(data);
                    } else if (month == 10) {
                        oct.push(data);
                    } else if (month == 11) {
                        nov.push(data)
                    } else if (month == 12) {
                        dec.push(data)
                    }
                }
            }
        }
    }

    const janLength = jan.length;
    const febLength = feb.length;
    const marLength = mar.length;
    const aprLength = apr.length;
    const mayLength = may.length;
    const junLength = jun.length;
    const julLength = jul.length;
    const augLength = aug.length;
    const sepLength = sep.length;
    const octLength = oct.length;
    const novLength = nov.length;
    const decLength = dec.length;
    const totalData = janLength + febLength + marLength + aprLength + mayLength + junLength + julLength + augLength + sepLength + octLength + novLength + decLength;

    const arr = [janLength, febLength, marLength, aprLength, mayLength, junLength, julLength, augLength, sepLength, octLength, novLength, decLength];

    let highest = 0;
    let lowest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    res.render("dashboard/", {datasets, totalLeads, totalClosingLeads, program, janLength, febLength, marLength, aprLength, mayLength, junLength, julLength, augLength, sepLength, octLength, novLength, decLength, programCari, tahun, batch, totalData, highest, lowest, dataLeadsSDM, dataLeadsSSM, dataLeadsHRM, dataLeadsInhouse, result});
}