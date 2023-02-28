import cors from 'cors';
import express from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());

let store = {};

app.post('/users', (req, res) => {
	console.log(req.body);
	Object.assign(store, { key: req.body });
	res.send('Your post is published');
});

app.get('/users', (req, res) => {
	res.send(store.key);
});

// app.put('/about', (req, res) => {
// 	res.send('about');
// });

// app.get('/contact', (req, res) => {
// 	res.send('I am Contact Page');
// });

app.listen(port, () => {
	console.log(`Example app Tayyaba on port ${port}`);
});
