import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

//This one represent evey single book with author name.
const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
