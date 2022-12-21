const express = require("express");
const router = express.Router();
const MailService = require("../controller/MailingService");

router.post("/send", MailService.SendMailService);

module.exports = router;
