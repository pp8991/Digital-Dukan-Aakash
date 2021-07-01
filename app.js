const express = require('express');
const app = express();
const path = require('path');

const connection = require('./config/db.config');
connection.once('Open', () => console.log('DB Connected'));
connection.on('error', () =>{console.log('Error')});

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json({
    extended: false
}));

app.use('/', require('./router/user'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));