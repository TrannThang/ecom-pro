import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD TO CART ", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn("REMOVE FROM CART ", action);
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    case EMPTY_CART:
      console.warn("REMOVE FROM CART ", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
