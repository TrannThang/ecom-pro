import { SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("product list SET  ", action);
      return [...action.data];

    default:
      return data;
  }
};
