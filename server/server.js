const express = require('express');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/');

const app = express();
const port = process.env.PORT || 3000;

const ENV = process.NODE_ENV || 'development';

if (ENV === 'development') {
	console.log('Dev');
	app.use(require('morgan')('dev'));
	// app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else if (ENV === 'production') {
	console.log('Prod');
	// app.use(errorHandler());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = { app };
