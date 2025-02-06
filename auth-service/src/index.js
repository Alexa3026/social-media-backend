import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from the Auth Microservice!');
});

app.listen(port, () => {
    console.log(`Auth Microservice listening on port ${port}`);
});