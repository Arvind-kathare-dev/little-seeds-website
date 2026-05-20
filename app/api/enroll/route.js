import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log("API /api/enroll route hit!");
  try {
    const data = await request.json();
    console.log("API received payload:", data);

    const { parentName, parentEmail, parentPhone, branch, children } = data;

    // Validate required fields
    if (!parentName || !parentEmail || !parentPhone || !branch || !children || children.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let childrenHtml = '';
    children.forEach((child, index) => {
      childrenHtml += `
        <div style="background-color: #f9f9f9; padding: 15px; margin-bottom: 15px; border-radius: 8px;">
          <h4 style="margin-top: 0; color: #333;">Child ${index + 1}</h4>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${child.name}</p>
          <p style="margin: 5px 0;"><strong>Age:</strong> ${child.age}</p>
          <p style="margin: 5px 0;"><strong>Program:</strong> ${child.program}</p>
        </div>
      `;
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || 'info@littleseeds.kids', 
      to: process.env.SMTP_TO || 'info@littleseeds.kids',   
      replyTo: parentEmail,
      subject: `New Enrollment Inquiry from ${parentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #317f7d; text-align: center; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Enrollment Inquiry</h2>
          
          <h3 style="color: #444; margin-top: 20px;">Parent/Guardian Details</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${parentName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${parentEmail}">${parentEmail}</a></p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${parentPhone}</p>
          
          <h3 style="color: #444; margin-top: 25px;">Branch Selection</h3>
          <p style="margin: 5px 0;"><strong>Branch:</strong> ${branch}</p>

          <h3 style="color: #444; margin-top: 25px;">Children Information</h3>
          ${childrenHtml}
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
            This email was sent from the Little Seeds Website Enrollment Form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Enrollment form submitted successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send enrollment inquiry. Please try again later.' }, { status: 500 });
  }
}
