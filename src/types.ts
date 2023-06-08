export type Coffee = {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  id: number;
};

export type CoffeeWithQty = Coffee & { qty: number };
