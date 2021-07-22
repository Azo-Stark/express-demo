const express = require("express");

const router = express();

router.use(require("./user"));
router.use("/profiles", require("./profile"));
router.use("/articles", require("./article"));

module.exports = router;
