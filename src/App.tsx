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

  useEffect(() => {
    setLibrary(db);
  }, [library])

  
  const libraryView = library.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  return (
    <section>
      <h1>my library app</h1>
      <div className="grid-container">
        <div className="grid-item">
          <BookForm />
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
