import axios from "axios";
import React, { useState } from "react";

import "./BookForm.css";

const BookForm = ({ onSubmit } : { onSubmit: () => void }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_LOCAL_API}/v1/addBook`, {
        title: title,
        author: author,
      })
      .then((response) => {
        alert(`Added book, ${title} by ${author}: ${response}`)
      })
      .catch((error) => {
        alert(`Error: ${error}`)
      });
    setTitle("");
    setAuthor("");
    onSubmit();
  };

  return (
    <div id="add-book-form">
      <h3>add a book</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>Title</h5>
        <input
          placeholder="Add title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h5>Author</h5>
        <input
          placeholder="Add author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="primary-button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookForm;
