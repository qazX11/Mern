import nodemailer from 'nodemailer';
export const sendConfirmationEmail = async (req, res) => {
  const { email, bookingDetails } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  let mailOptions = {
    from: '"Savonta Service" dimondswebdesign@gmail.com',
    to: email,
    subject: "Appoinment Confirmation",
    html: `
      <h1>Appoinment Confirmation</h1>
      <p>Thank you for your appoinment. Here are the details:</p>
      <ul>
        <li>Service: ${bookingDetails.service}</li>
        <li>Date: ${bookingDetails.date}</li>
        <li>Time: ${bookingDetails.time}</li>
        <li>Vehicle: ${bookingDetails.vehicle}</li>
      </ul>
      <p>Additional Note: ${bookingDetails.note}</p>
      <p>If you have any questions, please contact us.</p>
      <p>Contact: 074678936</p>
      <br/>
      <p>Best regards,</p>
      <p>The Savonta Service Team</p>
    `
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Confirmation email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending confirmation email" });
  }
};

export const sendLowInventoryAlert = async (req, res) => {
  const { supplierEmail, itemName, quantity } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"Savonta Service" dimondswebdesign@gmail.com',
    to: supplierEmail,
    subject: "Low Inventory Alert",
    html: `
      <h1>Low Inventory Alert</h1>
      <p>This is to inform you that the inventory for ${itemName} is running low.</p>
      <p>Current quantity: ${quantity}</p>
      <p>Please arrange for restocking as soon as possible.</p>
      <br/>
      <p>Best regards,</p>
      <p>The Savonta Service Team</p>
    `
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Low inventory alert sent: %s", info.messageId);
    res.status(200).json({ message: "Low inventory alert sent successfully" });
  } catch (error) {
    console.error("Error sending low inventory alert:", error);
    res.status(500).json({ message: "Error sending low inventory alert" });
  }
};

export const sendInquiryEmail = async (req, res) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"Savonta Service" dimondswebdesign@gmail.com',
    to: email,
    subject: "We've Received Your Inquiry",
    html: `
      <h1>Thank You for Your Inquiry</h1>
      <p>We have received your inquiry and will contact you soon.</p>
      <p>If you have any urgent questions, please don't hesitate to call us at 074678936.</p>
      <br/>
      <p>Best regards,</p>
      <p>The Savonta Service Team</p>
    `
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Inquiry email sent: %s", info.messageId);
    res.status(200).json({ message: "Inquiry email sent successfully" });
  } catch (error) {
    console.error("Error sending inquiry email:", error);
    res.status(500).json({ message: "Error sending inquiry email" });
  }
};

export const sendFeedbackEmail = async (req, res) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"Savonta Service" dimondswebdesign@gmail.com',
    to: email,
    subject: "Thank You for Your Feedback",
    html: `
      <h1>We Appreciate Your Feedback</h1>
      <p>Thank you for taking the time to provide us with your valuable feedback. We greatly appreciate your input as it helps us improve our services.</p>
      <p>If you have any further comments or suggestions, please don't hesitate to reach out to us.</p>
      <br/>
      <p>Best regards,</p>
      <p>The Savonta Service Team</p>
    `
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Feedback email sent: %s", info.messageId);
    res.status(200).json({ message: "Feedback email sent successfully" });
  } catch (error) {
    console.error("Error sending feedback email:", error);
    res.status(500).json({ message: "Error sending feedback email" });
  }
};
