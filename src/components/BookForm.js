import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  //destructuring dispatch from BookContext
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  //This fucntion will fire when we press the submit button or send the form
  const handleSubmit = (e) => {
    //There we prevent the borwser not to refresh the page
    e.preventDefault();
    //dispatching data to useReducer function
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    //Form for adding new book
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="Author name"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
