require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/');
const { mongoose } = require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);

const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development' || ENV === 'test') {
	app.use(require('morgan')('dev'));
} else if (ENV === 'production') {
	console.log('Prod');
	// app.use(errorHandler());
}

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = { app };
