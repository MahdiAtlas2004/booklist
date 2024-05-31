import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

//creating context with name BookContext
export const BookContext = createContext();

//This will wrap the components
const BookContextProvider = (props) => {
  //useReducer take three argument first one is the reducer that check what action is going to fire and the second one is the initial value and the third one is function that return the default value from localStorage.
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const loacalData = localStorage.getItem("books");
    return loacalData ? JSON.parse(loacalData) : [];
  });
  //using localStorage in useEffect hook to save data in browser every time that books change.
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  //this take books as data and dispatch is the function that set new data, change and update them.
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
