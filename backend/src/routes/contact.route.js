import express from "express";
import { sendContactMail } from "../services/mail.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await sendContactMail({
      name,
      email,
      phone,
      service,
      message,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;
