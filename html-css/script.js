const nodemailer = require('nodemailer');

async function main(){
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    let info = await transporter.sendMail({
        from: '"ll" <leonardolmartini@gmail.com',
        to: "kulzerraquel@outlook.com",

        subject: "hello",
        text: "hello wordl",
        
    });

    console.log("Message sent %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

