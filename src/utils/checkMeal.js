export const includesMeal = (id, cartItems) => {
  return cartItems.some((item) => item.idMeal === id);
};
