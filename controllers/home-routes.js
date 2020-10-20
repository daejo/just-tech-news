const router = require("express").Router();

// SAYS WHICH TEMPLATE IS GOING TO BE USED
router.get("/", (req,res) => {
    res.render("homepage");
});

module.exports = router;