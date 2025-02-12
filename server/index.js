app.post("/send-email", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Configuración del transporte de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "gastondangelo12@gmail.com",
    subject: `Nuevo mensaje de ${nombre}`,
    text: `De: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el correo");
  }
});

