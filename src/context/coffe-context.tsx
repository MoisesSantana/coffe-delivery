import { useMemo, createContext, useState, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';
import { Coffee, CoffeeWithQty } from '../types';

interface CoffeeContextType {
  addInCart: (coffe: Coffee, quantity: number) => void;
  cart: CoffeeWithQty[];
  removeOfCard: (id: number) => void;
  handleQtyOfCoffee: (coffee: CoffeeWithQty, addOrSub: number) => void;
  isDisabledConfirmOrderBtn: boolean;
  register: UseFormRegister<FieldValues>;
}

interface CoffeProviderProps {
  children: React.ReactNode;
}

export const CoffeContext = createContext({} as CoffeeContextType);

export function CoffeProvider({ children }: CoffeProviderProps) {
  const [cart, setCart] = useState<CoffeeWithQty[]>([]);

  const { register, watch } = useForm();

  const watchFields = watch([
    'cep',
    'street',
    'number',
    'neighborhood',
    'city',
    'uf',
    'paymentMethod',
  ]);

  const isDisabledConfirmOrderBtn = watchFields.some((field) => !field);

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

  const removeOfCard = useCallback(
    (id: number) => {
      const updatedCart = cart.filter((coffee) => coffee.id !== id);
      setCart(updatedCart);
    },
    [cart]
  );

  const handleQtyOfCoffee = useCallback(
    (coffee: CoffeeWithQty, addOrSub: number) => {
      const updatedCart = cart.map((currCoffee) =>
        currCoffee.id === coffee.id
          ? { ...coffee, qty: currCoffee.qty + addOrSub }
          : currCoffee
      );

      setCart(updatedCart);
    },
    [cart]
  );

  const value = useMemo(
    () => ({
      addInCart,
      cart,
      removeOfCard,
      handleQtyOfCoffee,
      isDisabledConfirmOrderBtn,
      register,
    }),
    [
      addInCart,
      cart,
      removeOfCard,
      handleQtyOfCoffee,
      isDisabledConfirmOrderBtn,
      register,
    ]
  );

  return (
    <CoffeContext.Provider value={value}>{children}</CoffeContext.Provider>
  );
}
