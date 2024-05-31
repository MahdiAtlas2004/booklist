import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      {/* books.length represent the number of books in app */}
      <p>Currently you have {books.length} books to get through</p>
    </div>
  );
};

export default Navbar;
