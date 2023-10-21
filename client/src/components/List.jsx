import React from "react";

const List = ({posts, setClicked, setOpenedPost}) => {
  const clickHandler = (id) => {
    console.log('click handler triggered')
    setClicked(true);
    setOpenedPost(id);
  };
  return (
    <ul id="List">
      {posts.map((post, index) => {
        return (
          <li key={post.id} onClick={() => clickHandler(post.id)}>
            {post.title}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
