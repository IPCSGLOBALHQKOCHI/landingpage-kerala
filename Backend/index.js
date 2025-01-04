const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxitm6rWGKmJ69JIivq_sIHiTtr08q8wJWUK_E0Trk7qT78tUoCItolmTPAGGBqV8wM/exec";

const EDUZILLA_API_URL = "https://erp.eduzilla.in/api/leads/add_new_lead";

  const instCode= "IPCS_Gbl08"
  const urlSecurityCode= "ipcsglobal"

const branchMapping = {
  CHN: "Kochi",
  CLT: "Calicut",
  TVM: "Trivandrum",
  ATL: "Attingal",
  KLM: "Kollam",
  KNR: "Kannur",
  TCR: "Thrissur",
  PER: "Perinthalmanna",
  KTM: "Kottayam",
  PTM: "Pathanamthitta",
  PKD: "Palakkad",
};


const courseMapping = {
  DM: "Ai Integrated Digital Marketing",
  INAUT: "Industrial Automation",
  BST: "Software Testing",
  IT: "Python and Data Science",
  BMS: "BMS & CCTV",
  PDAI: "Artificial Intelligence",
  EMB: "Embedded & IoT",
};

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

  const branchName = branchMapping[location];
  const courseName = courseMapping[course];

  if (!branchName) {
    return res.status(400).json({ error: "Invalid branch code provided" });
  }
  if (!courseName) {
    return res.status(400).json({ error: "Invalid course code provided" });
  }

  const emailContent = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Mobile:</strong> ${mobileNumber}</p>
    <p><strong>Course:</strong> ${courseName}</p>
    <p><strong>Location:</strong> ${branchName}</p>
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
    const sheetResponse = await axios.post(GOOGLE_SHEET_WEB_APP_URL, {
      name,
      mobileNumber,
      course:courseName,
      location:branchName,
      email,
      timestamp,
    });
    if (sheetResponse.data.status !== "success") {
      throw new Error("Failed to add data to Google Sheet");
    }

    // Send data to Eduzilla API
    const eduZillaResponse = await axios.post(EDUZILLA_API_URL, {
      inst_code:instCode,
      url_security_code:urlSecurityCode,
      fname: name,
      email: email || "N/A",
      mobile: mobileNumber,
      branch:location,
      course: course,
    });
    console.log("ERP",mobileNumber,course,location,name,instCode,urlSecurityCode);

    console.log(eduZillaResponse.data);

    if (eduZillaResponse.data !== 0) {
      throw new Error("Failed to add lead to Eduzilla");
      
    }

    res.status(200).json({
      message:
        "Form submitted, email sent, data added to Google Sheet, and lead sent to Eduzilla!",
    });
  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).json({ error: "Failed to process the request" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
