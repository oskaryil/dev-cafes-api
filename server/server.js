const express = require('express');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = { app };
