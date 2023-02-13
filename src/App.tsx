import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./components/Book/BookCard";
import BookForm from "./components/BookForm/BookForm";
import { Book } from "./types/LibraryTypes";

const db: Book[] = [
  {
    id: "1",
    title: "Harry Potter and The Sorcerer's Stone",
    author: "JK Rowling",
  },
  {
    id: "2",
    title: "Life of Pi",
    author: "Yann Martel",
  },
  {
    id: "3",
    title: "Catch-22",
    author: "Joseph Heller",
  },
  {
    id: "4",
    title: "Dough",
    author: "Jaime Kvaternik",
  },
];

function App() {
  const [library, setLibrary] = useState<Book[]>([]);
  const [isRefreshed, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const books = getBooks();
    setLibrary(db);

    return () => {
      setRefresh(false);
    }
  }, [isRefreshed])

  const handleRefresh = () => {
    setRefresh(true);
  }

  const getBooks = async () => {
    return await axios.get(`${process.env.REACT_APP_LOCAL_API}/v1/books/`);
  }
  
  const libraryView = library.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  return (
    <section>
      <h1>my library app</h1>
      <div className="grid-container">
        <div className="grid-item">
          <BookForm onSubmit={() => handleRefresh()}/>
        </div>
        <div className="grid-item library">
          <h3>my books</h3>
          <div className="flex-container">
            {libraryView}
          </div>
        </div>
      </div>
      <span className="footer">Made for Generate 2023</span>
    </section>
  );
}

export default App;
