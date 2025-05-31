import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a test account or replace with real credentials.
export const transporter = nodemailer.createTransport({
  host: "sm19.hosting.reg.ru",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


export const sendZayavka = async ({subject, message}) => {
  try {
    return await transporter.sendMail({
      from: process.env.EMAIL,
      to: "e.sulakova@yandex.ru",
      subject: subject,
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
};
