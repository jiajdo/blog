import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import SinglePost from "./components/SinglePost";
import AddPostForm from "./components/AddPostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [openedPost, setOpenedPost] = useState(null);
  const [addingPost, setAddingPost] = useState(false)

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

  const filterPost = () => {
    return posts.filter((post) =>{
        return post.id === openedPost
    })[0];
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="App">
        <h1 className="pageTitle">What books is Jia reading?</h1>
      <List {...{posts, setClicked, setOpenedPost}}/>
      {clicked ? <SinglePost post={filterPost()} /> : <></>} 
      {addingPost ? <AddPostForm /> : <button onClick={() => setAddingPost(true)}>Add Post</button>}      
      
    </div>
  );
}

export default App;
