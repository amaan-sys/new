import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("SG KEY EXISTS:", !!process.env.SENDGRID_API_KEY);
console.log("FROM:", process.env.SENDGRID_FROM_EMAIL);


export async function sendContactMail({
  name,
  email,
  phone,
  service,
  message,
}) {
  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL,
    
    subject: `New Service Request: ${service}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
    `,
  };
  

  await sgMail.send(msg);
}
