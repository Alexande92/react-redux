const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    // {
    //   id: 1,
    //   name: 'Book 1',
    //   count: 3,
    //   total: 150
    // },

    // {
    //   id: 2,
    //   name: 'Book 2',
    //   count: 2,
    //   total: 200
    // }
  ],
  orderTotal: 0,
  items: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      
      const itemIndex = state.cartItems.findIndex(({ id }) =>  id === bookId);
      const item = state.cartItems[itemIndex];
      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: ++item.count,
          total: item.total + book.price
        };
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        };
      }
      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ], 
          items: ++state.items,
          orderTotal: ++state.orderTotal,
        }
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1)
          ],
          items: state.cartItems.length,
          orderTotal: 111111
        }
      }
      
      default:
        return state;
  }
  // return state;
};

export default reducer;
