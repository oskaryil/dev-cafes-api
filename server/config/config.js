const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development' || ENV === 'test') {
	const config = require('./config.json');
	let envConfig = config[ENV];
	// app.use(require('morgan')('dev'));
	// console.log(envConfig);
	Object.keys(envConfig).forEach(key => {
		process.env[key] = envConfig[key];
	});
} else if (ENV === 'production') {
	console.log('Prod');
	// app.use(errorHandler());
}
