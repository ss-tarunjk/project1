const express = require("express")


const testController = require("../controller/test.controller")

const router = express.Router()

router.route("/test1").get(testController.test1)

module.exports = router