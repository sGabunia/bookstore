import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Book from "./components/Book";
import BookStore from "./components/BookStore";
import Favourites from "./components/Favourites";
import { initializeBooks } from "./reducers/booksReducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeBooks());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BookStore />
        </Route>
        <Route path="/details/:id">
          <Book />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
