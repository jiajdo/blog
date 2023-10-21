import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import SinglePost from "./components/SinglePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [openedPost, setOpenedPost] = useState(null);
  const fetchPosts = async () => {
    try {
      let res = await fetch("http://localhost:3030/posts");
      let postResults = await res.json();
      console.log("front end json", postResults);
      setPosts(postResults);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="App">
      <List {...{posts, setClicked, setOpenedPost}}
      />
    </div>
  );
}

//callback function from the frontend to get book
//stored in json object
//use .filter to get book by id

//have conditions for rendering different components
//have the state be an id. if null, none of them were clicked

//list component - displays all post titles

//view component - display individual post

//form component - add a blog, opens when clicking a button

export default App;
