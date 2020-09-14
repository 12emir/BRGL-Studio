const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(
    "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"
  );

  const apii =
    "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";
  const { email, message } = req.body;

  const content = {
    to: "emir.alobedi@gmail.com",
    from: email,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
