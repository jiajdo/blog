import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import db from './db-connection.js';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('This is the back')
})

//app.get display posts on the frontend

app.get("/posts", async (req, res) => {
    try {
        const {rows: posts} = await db.query("SELECT * FROM posts;");
        res.send(posts);
        console.log("posts from server", posts)

    } catch (e) {
        return res.status(400).json({e})
    }
})

//app.post route for making posts

app.listen(PORT, async () => {
    console.log(`Refrigerator running on ${PORT}`)
})