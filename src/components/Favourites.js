import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { favouriteBook } from "../reducers/booksReducer";
import { FaRegHeart } from "react-icons/fa";

const Favourites = () => {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) =>
    books.filter((book) => book.favourite)
  );
  if (books.length === 0) {
    return (
      <div className="container">
        <h2 className="favourites-empty">You Have No Favourite Book</h2>
        <Link to="/" className="btn-back">
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <section className="container">
      <div className="card-wrapper">
        {books.map((book) => {
          const {
            title,
            authors,
            imageLinks: { thumbnail },
          } = book.volumeInfo;
          return (
            <section key={book.id} className="card">
              <div className="card-info">
                <h3 className="book-title">{title.substring(0, 20)}</h3>
                <p className="author">
                  <span>By</span>{" "}
                  {authors.map((author) => author.substring(0, 12))}
                </p>
                <div className="favourite">
                  <button
                    className="btn-favourite"
                    onClick={() => dispatch(favouriteBook(book.id))}
                  >
                    {book.favourite
                      ? "remove from favourites"
                      : "add to favourites"}
                  </button>
                  <FaRegHeart
                    className={`heart ${book.favourite && "red-heart"}`}
                  />
                </div>
                <img
                  src={thumbnail}
                  alt="medicine book"
                  className="card-image"
                />
              </div>
              <Link to={`/details/${book.id}`} className="card-details">
                Read More...
              </Link>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Favourites;
