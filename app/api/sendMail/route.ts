import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    console.log("API Hit: /api/sendMail"); // Debugging log

    // Parse form data
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    if (!email || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Set up nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      
    });

    // Set up email options
    const mailOptions: any = {
      from: `<${name}> <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject,
      text: message,

    };

    // Handle file attachment
    if (file) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [
        { filename: file.name, content: fileBuffer },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
