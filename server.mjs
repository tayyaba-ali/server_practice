import cors from 'cors';
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => {
	res.send(req.body);
	let store = req.body;
	console.log(store);
});

app.get('/about', (req, res) => {
	store.push(req.body);
	res.send(store);
});

app.get('/contact', (req, res) => {
	res.send('I am Contact Page');
});

app.listen(port, () => {
	console.log(`Example app Tayyaba on port ${port}`);
});
