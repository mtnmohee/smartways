import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  const user = process.env.USER;
  const pass = process.env.PASS;
  console.log(user, pass);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "mohey_eldin@hotmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);

    return { status: 200, body: { message: "success" } };
  } catch (error) {
    console.log(error);
    return { status: 500, body: { message: "Couldn't send the email" } };
  }
}
