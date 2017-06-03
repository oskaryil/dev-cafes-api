const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/venues');

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = { app };
