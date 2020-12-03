import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import booksReducer from "./reducers/booksReducer";
import toggleMenuReducer from "./reducers/toggleMenuReducer";

const reducer = combineReducers({
  books: booksReducer,
  toggleMenu: toggleMenuReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
