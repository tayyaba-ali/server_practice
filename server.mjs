import cors from 'cors';
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let users = [];

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('User is created');
});

// app.get('/about', (req, res) => {
// 	res.send('about');
// });

// app.put('/about', (req, res) => {
// 	res.send('about');
// });

// app.get('/contact', (req, res) => {
// 	res.send('I am Contact Page');
// });

app.listen(port, () => {
	console.log(`Example app Tayyaba on port ${port}`);
});
