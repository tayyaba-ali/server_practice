import cors from 'cors';
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

let store = [];

app.use(cors());
app.get('/', (req, res) => {
	store.push[req.body];
	res.send(store);
});

app.get('/about', (req, res) => {
	res.send('I am About page');
});

app.get('/contact', (req, res) => {
	res.send('I am Contact Page');
});

app.listen(port, () => {
	console.log(`Example app Tayyaba on port ${port}`);
});
