import bookService from "../services/books";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_BOOKS":
      const newBooks = action.data.map((book) => {
        return { ...book, favourite: false };
      });
      return newBooks;
    case "TOGGLE_FAVOURITE": {
      const id = action.id;
      const bookToChange = state.find((book) => book.id === id);
      const newBook = { ...bookToChange, favourite: !bookToChange.favourite };
      return state.map((book) => (book.id !== id ? book : newBook));
    }

    default:
      return state;
  }
};

// action creators
export const favouriteBook = (id) => {
  return {
    type: "TOGGLE_FAVOURITE",
    id,
  };
};

export const initializeBooks = () => {
  return async (dispatch) => {
    const books = await bookService.getAll();
    dispatch({
      type: "INIT_BOOKS",
      data: books,
    });
  };
};

export default booksReducer;
