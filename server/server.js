import cors from "cors";
import express from "express";
import "dotenv/config";
import db from "./db-connection.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("This is the back");
});

//app.get display posts on the frontend

app.get("/posts", async (req, res) => {
  try {
    const { rows: posts } = await db.query("SELECT * FROM posts;");
    res.send(posts);
    console.log("posts from server", posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//app.post route for making posts
app.post("/posts", async (req, res) => {
    console.log('inside post request')
  const { title, img, content } = req.body;
  let newPost = await db.query(
    `INSERT INTO posts("title", "img", "content") VALUES($1, $2, $3)`,
     [title, img, content]);
console.log({newPost})
     return res.status(200);
});

app.listen(PORT, async () => {
  console.log(`Refrigerator running on ${PORT}`);
});
