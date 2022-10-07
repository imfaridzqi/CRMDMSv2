const express = require("express");
const router = express.Router();
const datasets = require("../controllers/datasets");
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const {datasetSchema} = require("../schemas");
const {isLoggedIn} = require("../middleware");

const validateDataset = (req, res, next) => {
    const { error } = datasetSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.route("/")
    .get(isLoggedIn,catchAsync(datasets.index))
    .post(isLoggedIn, catchAsync(datasets.createNewData));

router.get("/new", isLoggedIn, datasets.renderNewForm);

router.route("/:id")
    .get(isLoggedIn, catchAsync(datasets.showData))
    .put(isLoggedIn, catchAsync(datasets.editData))
    .delete(isLoggedIn, catchAsync(datasets.delete));

router.get("/:id/edit", isLoggedIn, catchAsync(datasets.renderEditForm));

router.get("/:id/aturjadwal", isLoggedIn, catchAsync(datasets.renderFormAturJadwal));



module.exports = router;