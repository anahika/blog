const { check, validationResult } = require("express-validator");

exports.postValidator = [
    check("title").trim().not().isEmpty().withMessage("Blog's title is empty"),
    check("content").trim().not().isEmpty().withMessage("Blog's content is empty"),
    check("meta").trim().not().isEmpty().withMessage("Meta Description is empty"),
    check("slug").trim().not().isEmpty().withMessage("Blog's slug is empty"),
    check("tags").isArray().withMessage("Tags must be array of strings").custom((tags) => {
        for (let tag of tags) {
            if (typeof tag !== "string") {
                throw Error("Tags must be array of strings");
            }
        }
        return true;
    }),

];

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if (error.length) {
        return res.status(401).json({ error: error[0].msg })
    }
    next();
}