import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Book = () => {
  const books = useSelector(({ books }) => books);
  const id = useParams().id;

  let selectedBook = books.find((book) => book.id === id);

  if (!selectedBook) {
    return <div className="loading">Loading...</div>;
  }

  const {
    title,
    authors,
    imageLinks: { thumbnail },
    description,
    pageCount,
    publisher,
  } = selectedBook.volumeInfo;
  return (
    <div className="container">
      <section className="more-details-card">
        <img src={thumbnail} alt={title} />
        <div className="more-details-info">
          <h3 className="book-title">{title}</h3>
          <p>
            {" "}
            <strong>Authors: </strong>
            {authors.map((author, index) => (
              <span key={index}>{author} </span>
            ))}
          </p>
          <p>
            <strong>Publisher: </strong>
            {publisher}
          </p>
          <p>
            <strong>Pages:</strong> {pageCount}
          </p>
          <p className="description">
            <strong>Description: </strong>
            {description}
          </p>
        </div>
      </section>
      <Link to="/" className="btn-back">
        Back To Store
      </Link>
    </div>
  );
};

export default Book;
