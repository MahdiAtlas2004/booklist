import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

//This one represent evey single book with author name.
const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const handleDelete = () => {
    const res = window.confirm("The book will be deleted.");
    if (res) {
      dispatch({ type: 'REMOVE_BOOK', id: book.id });
    }
  };
  return (
    <li onClick={handleDelete}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
