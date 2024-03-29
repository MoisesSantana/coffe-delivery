/* eslint-disable import/no-extraneous-dependencies */
import { useMemo, createContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, CoffeeWithQty } from '../types';
import { getPersistedCart, persistCart } from '../utils/storage';

interface CoffeeContextType {
  addInCart: (coffe: Coffee, quantity: number) => void;
  cart: CoffeeWithQty[];
  removeOfCard: (id: number) => void;
  handleQtyOfCoffee: (coffee: CoffeeWithQty, addOrSub: number) => void;
  handleConfirmOrder: (data: Order) => void;
  order: OrderWithCart;
}
interface CoffeProviderProps {
  children: React.ReactNode;
}

export interface Order {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: string;
  complement?: string;
}

interface OrderWithCart extends Order {
  cart: CoffeeWithQty[];
}

const ORDER_INITIAL_STATE = {
  cep: '',
  city: '',
  complement: '',
  neighborhood: '',
  number: 0,
  paymentMethod: '',
  street: '',
  uf: '',
  cart: [],
};

const CART_INITIAL_STATE: CoffeeWithQty[] = getPersistedCart();

export const CoffeContext = createContext({} as CoffeeContextType);

export function CoffeProvider({ children }: CoffeProviderProps) {
  const [cart, setCart] = useState<CoffeeWithQty[]>(CART_INITIAL_STATE);
  const [order, setOrder] = useState<OrderWithCart>(ORDER_INITIAL_STATE);

  const navigate = useNavigate();

  const handleConfirmOrder = useCallback(
    (orderData: Order) => {
      setOrder({ ...orderData, cart });
      setCart([]);
      persistCart([]);
      navigate('success');
    },
    [cart, navigate]
  );

  const hasThisCoffeeInCart = useCallback(
    (coffee: Coffee) => {
      return cart.some((currCoffee) => currCoffee.id === coffee.id);
    },
    [cart]
  );

  const addInCart = useCallback(
    (coffee: Coffee, quantity: number) => {
      const updatedCoffeeQty = cart.map((currCoffee) =>
        currCoffee.id === coffee.id ? { ...coffee, qty: quantity } : currCoffee
      );

      const updatedCart = hasThisCoffeeInCart(coffee)
        ? updatedCoffeeQty
        : [...cart, { ...coffee, qty: quantity }];

      setCart(updatedCart);
      persistCart(updatedCart);
    },
    [cart, hasThisCoffeeInCart]
  );

  const removeOfCard = useCallback(
    (id: number) => {
      const updatedCart = cart.filter((coffee) => coffee.id !== id);
      setCart(updatedCart);
      persistCart(updatedCart);
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
      persistCart(updatedCart);
    },
    [cart]
  );

  const value = useMemo(
    () => ({
      addInCart,
      cart,
      removeOfCard,
      handleQtyOfCoffee,
      handleConfirmOrder,
      order,
    }),
    [
      addInCart,
      order,
      cart,
      removeOfCard,
      handleQtyOfCoffee,
      handleConfirmOrder,
    ]
  );

  return (
    <CoffeContext.Provider value={value}>{children}</CoffeContext.Provider>
  );
}
