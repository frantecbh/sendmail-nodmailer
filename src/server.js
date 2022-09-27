require('dotenv').config()
const express = require('express')
const nodemailer = require("nodemailer");

const app = express()

app.use(express.json())

app.get("/sendmail", (req, res) => {

  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "9055e1d6b93965",
      pass: "7595c439c890bc"
    }
  });

  var message = {
    from: "no-repalay@gmail.com",
    to: "teste@gmail.com ",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };


  transporter.sendMail(message, (err)=>{
    if(err){
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Email não enviado!"
      })
    } 
  })
 

  return res.json({
    erro: false,
    mensagem: "E-mail enviado com sucesso"
  })
})




app.listen(3333, () =>{
  console.log("server on port 3333")
})