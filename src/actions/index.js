export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const deleteToCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const addToWishlist = (product) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: product,
  };
};

export const deleteToWishlist = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};