import cors from 'cors';
import express from 'express';
import 'dotenv/config';
//import db from '..server/db-connection.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('This is the back')
})

app.listen(PORT, async () => {
    console.log(`Refrigerator running on ${PORT}`)
})