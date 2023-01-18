import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

async function EmailGenerator() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER_EMAIL,
      pass: process.env.MAIL_USER_PASSWORD,
    },
  });

  console.log("gurleen");

  await transporter.sendMail({
    from: process.env.MAIL_FROM, // sender address
    to: process.env.MAIL_TO, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("gurleen2");
};

EmailGenerator();

export default EmailGenerator; 