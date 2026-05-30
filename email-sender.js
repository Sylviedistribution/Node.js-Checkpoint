const nodemailer = require('nodemailer');

async function sendTestEmail() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || user;

  if (!user || !pass) {
    console.error('Please set EMAIL_USER and EMAIL_PASS environment variables.\nDo not hardcode credentials.');
    return;
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  let info = await transporter.sendMail({
    from: user,
    to,
    subject: 'Test email from Node.js',
    text: 'This is a test email sent from Node.js using nodemailer.'
  });

  console.log('Message sent:', info.messageId);
}

if (require.main === module) {
  sendTestEmail().catch(err => console.error('Email error:', err));
}

module.exports = { sendTestEmail };
