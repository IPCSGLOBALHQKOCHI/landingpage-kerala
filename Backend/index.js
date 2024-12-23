const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const GOOGLE_SHEET_WEB_APP_URL="https://script.google.com/macros/s/AKfycbxitm6rWGKmJ69JIivq_sIHiTtr08q8wJWUK_E0Trk7qT78tUoCItolmTPAGGBqV8wM/exec"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error with email transporter:", error);
  } else {
    console.log("Email transporter is ready");
  }
});

app.post("/api/submitform", async (req, res) => {
  const { name, mobileNumber, course, location, email, timestamp } = req.body;

  if (!name || !mobileNumber || !course || !location || !timestamp) {
    return res
      .status(400)
      .json({ error: "All fields except email are required" });
  }

  const emailContent = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Mobile:</strong> ${mobileNumber}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Date & Time:</strong> ${timestamp}</p>
    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}

  `;

  // Mail options
  const mailOptions = {
    from: "info@ipcsglobal.com", // Sender email
    to: "ipcsglobalindia@gmail.com", // The constant recipient email
    subject: "Lead Form Submission",
    html: emailContent,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Send data to Google Sheets via Apps Script Web App
    const response = await axios.post(GOOGLE_SHEET_WEB_APP_URL, {
      name,
      mobileNumber,
      course,
      location,
      email,
      timestamp,
    });

    if (response.data.status === "success") {
      res.status(200).json({
        message: "Form submitted, email sent, and data added to Google Sheet!",
      });
    } else {
      res.status(500).json({
        error: "Failed to add data to Google Sheet",
        details: response.data.message,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process the request" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});   

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
