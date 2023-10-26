const nodemailer = require('nodemailer')

const MAIL_CONTENT = `<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spider-man 2</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
        }

        table {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f2f2f2;
        }

        tbody {
            width: 100%;
            max-width: 600px;
        }

        #cabecalho {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #131313;
            border-radius: 10px 10px 0 0;
        }

        #logo {
            width: 100%;
            height: 100px;
            background-image: url(./img/logo.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        #console {
            width: 100%;
            height: 80px;
            background-image: url(./img/miranha-console-e-jogo.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        #descricao {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        h2,.laranja {
            color: #ecbb26;
        }
        span {
            color: black;
        }

        img {
            height: 30px;
            margin-left: 7px;
            filter: brightness(10%);
        }

        img:hover {
            transform: translateY(-2px);
            transition: .8s;
        }

        a {
            height: 30px;
            text-decoration: none;
        }

        #insta {
            height: 28px;
        }

        #whats {
            height: 33px;
        }

        #rodape {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #endereco {
            text-align: center;
            font-size: 8px;
        }

        p {
            font-weight: bold;
            color: black;
        }



    </style>
</head>
<body>
    <table>
        <tbody>
            <tr id="cabecalho">
                <td id="logo"></td>
                <td id="console"></td>
            </tr>
            <tr id="descricao">
                <td>
                    <h2>Chegou na Checkpoint!</h2>
                    <p>
                        <span class="laranja">Marvel's Spider-Man 2 para Playstation 5<span>
                        <span>e</span>
                        <span class="laranja">console Edição limitada Marvel's Spider-Man 2</span> 
                        <span>já está disponível em nossas lojas!</span>
                    </p>
                </td>
            </tr>
            <tr id="rodape">
                <td>
                    <p>Nossas redes:</p>
                </td>
                <td>
                    <a href="https://www.instagram.com/checkpoint.games/">
                        <img id="insta" src="img/insta.webp" alt="">
                    </a>
                    <a href="https://www.facebook.com/checkpoint.face/">
                        <img id="face" src="img/face.png" alt="">
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=5192523450&text&type=phone_number&app_absent=0">
                        <img id="whats" src="img/whats.png" alt="">
                    </a>
                </td>
                <td id="endereco">
                    <hr>
                    Bourbon Shopping Country, Av. Túlio de Rose, 80 - 77 · (51) 3311-0109 | 
                    Av. Assis Brasil, 2611 - Lj 115A · (51) 3019-0707
                </td>
            </tr>
        </tbody>
    </table>
</body>`

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.MAIL_SENDER_EMAIL, 
        pass: process.env.MAIL_SENDER_PASS,
    }
})

transporter.sendMail({
    from: `Nome <${process.env.MAIL_SENDER_EMAIL}>`,
    to: "template",
    subject: "assunto",
    text: "descricao",
    html: `${MAIL_CONTENT}`
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})