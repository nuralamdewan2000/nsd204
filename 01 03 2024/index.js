const nodemailer =require('nodemailer');
var cron = require('node-cron');

cron.schedule('*/10 * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});

// transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'katelynn8@ethereal.email',
        pass: 'yYCDrq9wKH5frWJRCx'
    }
});

const email_data =[
    {
        to:"katelynn8@ethereal.email",
        from:"nuralamdewan2000@gmail.com",
        subject:"admission Query",
        text:"hello ,how to i enrol in this course",
        html:'<h1>Hello from Nodejs</h1>'
    },
    {
        to:"katelynn8@ethereal.email",
        from:"nuralamdewan153@gmail.com",
        subject:"ticket query",
        text:"hello ,how to i enrol in this course",
        html:'<h1>Hello from Nodejs</h1>'
    }
]


email_data.forEach((email) =>{
    transporter.sendMail(email)
    .then(() =>{
        console.log('email send successful')
    })
    .catch((err) =>{
        console.log('error in sending email')
        console.log(err)
    })

})
