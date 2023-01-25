const Datasets = require("../models/datasets");
const Program = require("../models/program");
const Sumber = require("../models/sumber");

module.exports.index = async(req, res) => {
    const datasets = await Datasets.find({});
    const program = await Program.find({});
    const programCari = req.body.namaProgram;
    const tahun = req.body.tahun;
    const batch = req.body.batch;

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

    res.render("chart/", {program, datasets, janLength, febLength, marLength, aprLength, mayLength, junLength, julLength, augLength, sepLength, octLength, novLength, decLength, programCari, tahun, batch, totalData});
}

module.exports.sumber = async(req, res) => {
    const datasets = await Datasets.find({});
    const sumber = await Sumber.find({});

    const cariSumber = req.body.sumber;
    const tahun = req.body.tahun;

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
        if (data.sumber == cariSumber) {
            if (year == tahun) {
                if (month == 1) {
                    jan.push(data)
                } else if (month == 2) {
                    feb.push(data);
                } else if (month == 3) {
                    mar.push(data)
                } else if (month == 4) {
                    apr.push(data)
                } else if (month == 5) {
                    may.push(data)
                } else if (month == 6) {
                    jun.push(data)
                } else if (month == 7) {
                    jul.push(data)
                } else if (month == 8) {
                    aug.push(data)
                } else if (month == 9) {
                    sep.push(data)
                } else if (month == 10) {
                    oct.push(data)
                } else if (month == 11) {
                    nov.push(data)
                } else if (month == 12) {
                    dec.push(data)
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
    
    res.render("chart/sumber", {sumber, datasets, janLength, febLength, marLength, aprLength, mayLength, junLength, julLength, augLength, sepLength, octLength, novLength, decLength, cariSumber, tahun, totalData})

}

// module.exports.index = async(req, res) => {
//     const datasets = await Datasets.find({});
//     const program = await Program.find({});
//     const title = "Chart";

//     const DMjan = [];
//     const DMfeb = [];
//     const DMmar = [];
//     const DMapr = [];
//     const DMmay = [];
//     const DMjun = [];
//     const DMjul = [];
//     const DMaug = [];
//     const DMsep = [];
//     const DMoct = [];
//     const DMnov = [];
//     const DMdec = [];

//     const SMjan = [];
//     const SMfeb = [];
//     const SMmar = [];
//     const SMapr = [];
//     const SMmay = [];
//     const SMjun = [];
//     const SMjul = [];
//     const SMaug = [];
//     const SMsep = [];
//     const SMoct = [];
//     const SMnov = [];
//     const SMdec = [];

//     const HRMjan = [];
//     const HRMfeb = [];
//     const HRMmar = [];
//     const HRMapr = [];
//     const HRMmay = [];
//     const HRMjun = [];
//     const HRMjul = [];
//     const HRMaug = [];
//     const HRMsep = [];
//     const HRMoct = [];
//     const HRMnov = [];
//     const HRMdec = [];

//     const IHTjan = [];
//     const IHTfeb = [];
//     const IHTmar = [];
//     const IHTapr = [];
//     const IHTmay = [];
//     const IHTjun = [];
//     const IHTjul = [];
//     const IHTaug = [];
//     const IHTsep = [];
//     const IHToct = [];
//     const IHTnov = [];
//     const IHTdec = [];


//     const DMFromWhatsAppJan = [];
//     const DMFromWhatsAppFeb = [];
//     const DMFromWhatsAppMar = [];
//     const DMFromWhatsAppApr = [];
//     const DMFromWhatsAppMay = [];
//     const DMFromWhatsAppJun = [];
//     const DMFromWhatsAppJul = [];
//     const DMFromWhatsAppAug = [];
//     const DMFromWhatsAppSep = [];
//     const DMFromWhatsAppOct = [];
//     const DMFromWhatsAppNov = [];
//     const DMFromWhatsAppDec = [];


//     for (data of datasets) {
//         const year = new Date(data.tglInput).getFullYear();
//         const month = new Date(data.tglInput).getMonth() + 1;

//         if (data.program === "Sertifikasi Digital Marketing") {
//             if (year == 2022) {
//                 if (month == 1) {
//                     DMjan.push(data);
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppJan.push(data): DMFromWhatsAppJan.push(0);
//                     }
//                 } else if (month == 2) {
//                     DMfeb.push(data);
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppFeb.push(data): DMFromWhatsAppFeb.push(0);
//                     }
//                 } else if (month == 3) {
//                     DMmar.push(data);
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppMar.push(data): DMFromWhatsAppMar.push(0);
//                     }
//                 } else if (month == 4) {
//                     DMapr.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppApr.push(data): DMFromWhatsAppApr.push(0);
//                     }
//                 } else if (month == 5) {
//                     DMmay.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppMay.push(data): DMFromWhatsAppMay.push(0);
//                     }
//                 } else if (month == 6) {
//                     DMjun.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppJun.push(data): DMFromWhatsAppJun.push(0);
//                     }
//                 } else if (month == 7) {
//                     DMjul.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppJul.push(data): DMFromWhatsAppJul.push(0);
//                     }
//                 } else if (month == 8) {
//                     DMaug.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppAug.push(data): DMFromWhatsAppAug.push(0);
//                     }
//                 } else if (month == 9) {
//                     DMsep.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppSep.push(data): DMFromWhatsAppSep.push(0);
//                     }
//                 } else if (month == 10) {
//                     DMoct.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppOct.push(data): DMFromWhatsAppOct.push(0);
//                     } 
//                 } else if (month == 11) {
//                     DMnov.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppNov.push(data): DMFromWhatsAppNov.push(0);
//                     }
//                 } else if (month == 12) {
//                     DMdec.push(data)
//                     if (data.sumber === "WhatsApp") {
//                         data ? DMFromWhatsAppDec.push(data): DMFromWhatsAppDec.push(0);
//                     }
//                 }
//             }
//         }

        

//         if (data.program === "Sertifikasi Social Media") {
//             if (year == 2022) {
//                 if (month == 1) {
//                     SMjan.push(data);
//                 } else if (month == 2) {
//                     SMfeb.push(data);
//                 } else if (month == 3) {
//                     SMmar.push(data);
//                 } else if (month == 4) {
//                     SMapr.push(data)
//                 } else if (month == 5) {
//                     SMmay.push(data)
//                 } else if (month == 6) {
//                     SMjun.push(data)
//                 } else if (month == 7) {
//                     SMjul.push(data)
//                 } else if (month == 8) {
//                     SMaug.push(data)
//                 } else if (month == 9) {
//                     SMsep.push(data)
//                 } else if (month == 10) {
//                     SMoct.push(data) 
//                 } else if (month == 11) {
//                     SMnov.push(data)
//                 } else if (month == 12) {
//                     SMdec.push(data)
//                 }
//             }
//         }

//         if (data.program === "Human Resource Manager") {
//             if (year == 2022) {
//                 if (month == 1) {
//                     HRMjan.push(data);
//                 } else if (month == 2) {
//                     HRMfeb.push(data);
//                 } else if (month == 3) {
//                     HRMmar.push(data);
//                 } else if (month == 4) {
//                     HRMapr.push(data)
//                 } else if (month == 5) {
//                     HRMmay.push(data)
//                 } else if (month == 6) {
//                     HRMjun.push(data)
//                 } else if (month == 7) {
//                     HRMjul.push(data)
//                 } else if (month == 8) {
//                     HRMaug.push(data)
//                 } else if (month == 9) {
//                     HRMsep.push(data)
//                 } else if (month == 10) {
//                     HRMoct.push(data) 
//                 } else if (month == 11) {
//                     HRMnov.push(data)
//                 } else if (month == 12) {
//                     HRMdec.push(data)
//                 }
//             }
//         }

//         if (data.program === "In House Training") {
//             if (year == 2022) {
//                 if (month == 1) {
//                     IHTjan.push(data);
//                 } else if (month == 2) {
//                     IHTfeb.push(data);
//                 } else if (month == 3) {
//                     IHTmar.push(data);
//                 } else if (month == 4) {
//                     IHTapr.push(data)
//                 } else if (month == 5) {
//                     IHTmay.push(data)
//                 } else if (month == 6) {
//                     IHTjun.push(data)
//                 } else if (month == 7) {
//                     IHTjul.push(data)
//                 } else if (month == 8) {
//                     IHTaug.push(data)
//                 } else if (month == 9) {
//                     IHTsep.push(data)
//                 } else if (month == 10) {
//                     IHToct.push(data) 
//                 } else if (month == 11) {
//                     IHTnov.push(data)
//                 } else if (month == 12) {
//                     IHTdec.push(data)
//                 }
//             }
//         }
//     }

//     const DMjanLength = DMjan.length;
//     const DMfebLength = DMfeb.length;
//     const DMmarLength = DMmar.length;
//     const DMaprLength = DMapr.length;
//     const DMmayLength = DMmay.length;
//     const DMjunLength = DMjun.length;
//     const DMjulLength = DMjul.length;
//     const DMaugLength = DMaug.length;
//     const DMsepLength = DMsep.length;
//     const DMoctLength = DMoct.length;
//     const DMnovLength = DMnov.length;
//     const DMdecLength = DMdec.length;

//     const SMjanLength = SMjan.length;
//     const SMfebLength = SMfeb.length;
//     const SMmarLength = SMmar.length;
//     const SMaprLength = SMapr.length;
//     const SMmayLength = SMmay.length;
//     const SMjunLength = SMjun.length;
//     const SMjulLength = SMjul.length;
//     const SMaugLength = SMaug.length;
//     const SMsepLength = SMsep.length;
//     const SMoctLength = SMoct.length;
//     const SMnovLength = SMnov.length;
//     const SMdecLength = SMdec.length;

//     const HRMjanLength = HRMjan.length;
//     const HRMfebLength = HRMfeb.length;
//     const HRMmarLength = HRMmar.length;
//     const HRMaprLength = HRMapr.length;
//     const HRMmayLength = HRMmay.length;
//     const HRMjunLength = HRMjun.length;
//     const HRMjulLength = HRMjul.length;
//     const HRMaugLength = HRMaug.length;
//     const HRMsepLength = HRMsep.length;
//     const HRMoctLength = HRMoct.length;
//     const HRMnovLength = HRMnov.length;
//     const HRMdecLength = HRMdec.length;

//     const IHTjanLength = IHTjan.length;
//     const IHTfebLength = IHTfeb.length;
//     const IHTmarLength = IHTmar.length;
//     const IHTaprLength = IHTapr.length;
//     const IHTmayLength = IHTmay.length;
//     const IHTjunLength = IHTjun.length;
//     const IHTjulLength = IHTjul.length;
//     const IHTaugLength = IHTaug.length;
//     const IHTsepLength = IHTsep.length;
//     const IHToctLength = IHToct.length;
//     const IHTnovLength = IHTnov.length;
//     const IHTdecLength = IHTdec.length;

//     const DMFromWhatsAppJanLength = DMFromWhatsAppJan.length;
//     const DMFromWhatsAppFebLength = DMFromWhatsAppFeb.length;
//     const DMFromWhatsAppMarLength = DMFromWhatsAppMar.length;
//     const DMFromWhatsAppAprLength = DMFromWhatsAppApr.length;
//     const DMFromWhatsAppMayLength = DMFromWhatsAppMay.length;
//     const DMFromWhatsAppJunLength = DMFromWhatsAppJun.length;
//     const DMFromWhatsAppJulLength = DMFromWhatsAppJul.length;
//     const DMFromWhatsAppAugLength = DMFromWhatsAppAug.length;
//     const DMFromWhatsAppSepLength = DMFromWhatsAppSep.length;
//     const DMFromWhatsAppOctLength = DMFromWhatsAppOct.length;
//     const DMFromWhatsAppNovLength = DMFromWhatsAppNov.length;
//     const DMFromWhatsAppDecLength = DMFromWhatsAppDec.length;


//     res.render("chart/", {DMjanLength, DMfebLength, DMmarLength, DMaprLength, DMmayLength, DMjunLength, DMjulLength, DMaugLength, DMsepLength, DMoctLength, DMnovLength, DMdecLength, SMjanLength, SMfebLength, SMmarLength, SMaprLength, SMmayLength, SMjunLength, SMjulLength, SMaugLength, SMsepLength, SMoctLength, SMnovLength, SMdecLength, HRMjanLength, HRMfebLength, HRMmarLength, HRMaprLength, HRMmayLength, HRMjunLength, HRMjulLength, HRMaugLength, HRMsepLength, HRMoctLength, HRMnovLength, HRMdecLength, IHTjanLength, IHTfebLength, IHTmarLength, IHTaprLength, IHTmayLength, IHTjunLength, IHTjulLength, IHTaugLength, IHTsepLength, IHToctLength, IHTnovLength, IHTdecLength, DMFromWhatsAppJanLength, DMFromWhatsAppFebLength, DMFromWhatsAppMarLength, DMFromWhatsAppAprLength, DMFromWhatsAppMayLength, DMFromWhatsAppJunLength, DMFromWhatsAppJulLength, DMFromWhatsAppAugLength, DMFromWhatsAppSepLength, DMFromWhatsAppOctLength, DMFromWhatsAppNovLength, DMFromWhatsAppDecLength, title, program});
// }