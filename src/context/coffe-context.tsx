import { useMemo, createContext, useState, useCallback } from 'react';
import { Coffee, CoffeeWithQty } from '../types';

interface CoffeeContextType {
  addInCart: (coffe: Coffee, quantity: number) => void;
  cart: CoffeeWithQty[];
}

interface CoffeProviderProps {
  children: React.ReactNode;
}

export const CoffeContext = createContext({} as CoffeeContextType);

export function CoffeProvider({ children }: CoffeProviderProps) {
  const [cart, setCart] = useState<CoffeeWithQty[]>([]);

  const hasThisCoffeeInCart = useCallback(
    (coffee: Coffee) => {
      return cart.some((currCoffee) => currCoffee.id === coffee.id);
    },
    [cart]
  );

  const addInCart = useCallback(
    (coffee: Coffee, quantity: number) => {
      const updatedCart = cart.map((currCoffee) =>
        currCoffee.id === coffee.id ? { ...coffee, qty: quantity } : currCoffee
      );

      setCart((state) =>
        hasThisCoffeeInCart(coffee)
          ? updatedCart
          : [...state, { ...coffee, qty: quantity }]
      );
    },
    [cart, hasThisCoffeeInCart]
  );

  const value = useMemo(
    () => ({
      addInCart,
      cart,
    }),
    [addInCart, cart]
  );

  return (
    <CoffeContext.Provider value={value}>{children}</CoffeContext.Provider>
  );
}
