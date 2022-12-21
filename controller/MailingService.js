const Mailer = require("../mails/Mail_Sender");

const SendMailService = async (req, res) => {
  try {
    const { email, content, subject } = req.body;
    if (!email) {
      return res.status(400).json({
        Message: "please pass the email value",
        Success: false,
      });
    }
    if (!content) {
      return res.status(400).json({
        Message: "please pass the content correctly",
        Success: false,
      });
    }
    if (!subject) {
      return res.status(400).json({
        Message: "please pass the subject value",
        Success: false,
      });
    }

    await Mailer.Mail_Sender(email, subject, content);
    res.status(200).send("mail send successully");
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

module.exports = {
  SendMailService,
};
