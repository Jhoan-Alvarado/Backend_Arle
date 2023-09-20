const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/data', async (req, res) => {
    const { name, email} = req.body;

  
    const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
    `;

   
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bincuenta321@gmail.com', 
            pass: 'llbucyrqaciqtmcv'
        }
    });


    let info = await transporter.sendMail({
        from: '"JAJA" <bincuenta321@gmail.com>', 
        to: email, 
        subject: 'correo insanidi', 
        html: contentHTML 
    });

    
    console.log('Correo enviado a ' , email);

    res.redirect('index.html');
});

module.exports = router;