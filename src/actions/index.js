export const SUBTRACT_FROM_CART = "subtract_from_cart";
export const ADD_TO_CART = "add_to_cart";

export function subtractFromCart(productId, all = false) {
  return {
    type: SUBTRACT_FROM_CART,
    payload: {productId, all}
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

