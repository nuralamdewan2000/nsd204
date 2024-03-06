const express = require('express');
const { transports, format } = require('winston');
const expressWinston = require('express-winston');
require('winston-mongodb');

const app = express();

app.use(expressWinston.logger({
    transports: [
        // new transports.Console({
        //     json: true,
        //     level: 'info'
        // })
        new transports.File({
            level: 'error',
            filename: 'errors.log'
        })

        // new transports.MongoDB({
        //     db:'/logs'
        // })
    ],
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint()
       
    ),
    statusLevels: true
}));

app.get('/', (req, res) => {
    // Intentional error: Trying to access a property of an undefined object
    const data = undefined;
    console.log(data.property); // This will throw an error
    res.status(404).send({ msg: 'API working' });
});

app.get('/health', (req, res) => {
    res.send({ msg: 'Its healthy' });
});

app.listen(4000, () => {
    console.log(`server is running at http://localhost:4000`);
});
