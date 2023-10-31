const { config } = require('dotenv')
const nodemailer = require('nodemailer')
require('dotenv'),config()
fs = require('fs')

fs.readFile("./index.html", 'utf8',function (err, html) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.MAIL_SENDER_EMAIL, 
            pass: process.env.MAIL_SENDER_PASS,
        }
    })

    transporter.sendMail({
        from: `Nome <${process.env.MAIL_SENDER_EMAIL}>`,
        to: `${process.env.MAIL_SENDER_TO}`,
        subject: "assunto",
        text: "descricao",
        html: `${html}`
    }).then(message => {
        console.log(message)
    }).catch(err => {
        console.log(err)
    })
})