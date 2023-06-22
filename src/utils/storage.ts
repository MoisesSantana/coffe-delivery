import { CoffeeWithQty } from '../types';

export const persistCart = (cart: CoffeeWithQty[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getPersistedCart = (): CoffeeWithQty[] => {
  const persistedCart = localStorage.getItem('cart');
  return persistedCart ? JSON.parse(persistedCart) : [];
};
