import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeToCart = (data) => {
  console.warn("action is remove cart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emptyCart = () => {
  console.warn("action empty");
  return {
    type: EMPTY_CART,
  };
};
