import React from "react";
import { useReducer } from "react";

const initialAddForm = {
  title: "",
  content: "",
  img: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "editTitle":
      return { ...state, title: action.value };
    case "editContent":
      return { ...state, content: action.value };
    case "editImg":
      return { ...state, img: action.value };
    default:
      return state;
  }
};

const AddPostForm = () => {
  const [state, dispatch] = useReducer(reducer, initialAddForm);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = state;
      await fetch("http://localhost:3030/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    } 
    catch (e){
      console.log(e);
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input
        type="text"
        id="add-book-title"
        placeholder="Book Title"
        required
        value={state.title}
        onChange={(e) => {
          dispatch({ type: "editTitle", value: e.target.value });
        }}
      />
      <label>Image</label>
      <input
        type="text"
        id="add-img-src"
        placeholder="Image Address"
        required
        value={state.img}
        onChange={(e) => {
          dispatch({ type: "editImg", value: e.target.value });
        }}
      />
      <label>Review</label>
      <input
        className="reviewInput"
        type="text"
        id="add-content"
        placeholder="Review"
        required
        value={state.content}
        onChange={(e) => {
          dispatch({ type: "editContent", value: e.target.value });
        }}
      />
      <button type="submit" className="addButton">
        Add Book Review
      </button>
    </form>
  );
};

export default AddPostForm;
