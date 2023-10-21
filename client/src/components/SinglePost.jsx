import React from 'react'


const SinglePost = ({post}) => {
  return (
    <div>
   <h1>{post.title}</h1>
   <img src={post.img}></img>
   <p>{post.content}</p>
   </div>
  )
}

export default SinglePost