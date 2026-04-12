const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for port 465
  auth: {
    user: process.env.SMTP_USER,   // Verified Gmail
    pass: process.env.SMTP_PASS   // App Password
  }
});
module.exports = transporter;