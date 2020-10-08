import nodemailer from "nodemailer";

const emailPass = "yourPassword";
let transporter = nodemailer.createTransport({
  host: "mail.tanie-logo.pl",
  port: 465,
  secure: true,
  auth: {
    user: "kontakt@tanie-logo.pl",
    pass: "!LoLeQ3@1",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
//[1]

export default async (req, res) => {
  const { senderMail, name, content, recipientMail } = req.body;
  //[2]

  // Check if fields are all filled
  if (
    senderMail === "" ||
    name === "" ||
    content === "" ||
    recipientMail === ""
  ) {
    res.status(403).send("");
    return;
  }
  //[3]

  const mailerRes = await mailer({
    recipientMail,
    name,
    text: content,
    recipientMail,
  });
  res.send(mailerRes);
  //[4]
};

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };
  //[5]

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
  //[6]
};
