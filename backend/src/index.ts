import app from './app';
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
	console.log('Server is listening at port ' + port);
});
