const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
};

const fetchBooks = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  };
}

const allBooksDeletedfromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_DELETED_FROM_CART',
    payload: bookId
  };
}
export {
  // booksLoaded,
  // booksRequested,
  // booksError,
  allBooksDeletedfromCart,
  bookDeletedFromCart,
  bookAddedToCart,
  fetchBooks
}