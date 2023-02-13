import React, { useEffect, useState } from "react";
import "./App.css";
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
  }, [])

  
  const libraryView = library.map((book) => (
    <span>{book.title}, </span>
  ));

  return (
    <section>
      <h1>
        This is my library!
      </h1>
      <div>
        {libraryView}
      </div>
    </section>
  );
}

export default App;
