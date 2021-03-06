import dotenv from 'dotenv';

dotenv.config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SendGridApiKey);

/**
 * @description Send email notification
 * @param {string} receiverEmail
 * @param {string} subject
 * @param {string} html
 */

const sendEmail = (receiverEmail, subject, html) => {
  sgMail.send({
    to: receiverEmail,
    from: `${process.env.SENDER_EMAIL}`,
    subject,
    html
  });
};

export default sendEmail;
