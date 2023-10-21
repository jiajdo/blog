import React from 'react'

const List = (props) => {
  return (
    <ul id="List">{props.posts.map((post, index) => {
        return (
       <li key={post.id}>{post.title}</li> 
        )
    }
        
        
        
        )}</ul>
  )
}

export default List