const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      items: 0,
    };
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_DELETED_FROM_CART':
      return updateOrder(state, action.payload, -1);
      
    case 'ALL_BOOKS_DELETED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    
    default:
      return state.shoppingCart

  }
};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

const updateCartItem = (book, item = {}, quantity) => {
  const { 
    id = book.id, 
    count = 0, 
    title = book.title, 
    total = 0 } = item;
  
    return {
      id, 
      title,
      count: count + quantity,
      total: total + quantity*book.price
    } 
};

const updateItemsCount = (cartItems) => {
  return cartItems.reduce(
    (accum, currentValue) => {
      return accum + currentValue['count']
  }, 0)
};

const updateCartTotal = (cartItems) => {
  return cartItems.reduce(
    (accum, currentValue) => {
      return accum + currentValue['total']
    }, 0)
};

const updateOrder = (state, bookId, quantity) => {
  
  let { bookList: { books }, shoppingCart: { cartItems }} = state;
  const book = books.find(({ id }) => id === bookId);
  
  const itemIndex = cartItems.findIndex(({ id }) =>  id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  cartItems = updateCartItems(cartItems, newItem, itemIndex);

  return {
    cartItems: cartItems,
    items: updateItemsCount(cartItems),
    orderTotal: updateCartTotal(cartItems)
    
    // items: cartItems.length,
    // orderTotal: cartItems.reduce(
    //   (accum, currentValue) => {
    //     return accum + currentValue['total']
    //   }, state.orderTotal)
  }
};

export default updateShoppingCart;