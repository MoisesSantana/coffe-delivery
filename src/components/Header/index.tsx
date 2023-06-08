import { useContext } from 'react';
import { HeaderContainer } from './header-styled';
import { CoffeContext } from '../../context/coffe-context';
import { CoffeeWithQty } from '../../types';

export function Header() {
  const { cart } = useContext(CoffeContext);

  const total = cart.reduce(
    (acc: number, curr: CoffeeWithQty) => acc + curr.qty,
    0
  );

  return (
    <HeaderContainer>
      <img src="./logo.svg" alt="e Delivery" />
      <section className="actions">
        <div className="location">
          <img src="./pin.svg" alt="localização" />
          <span>Rio de Janeiro</span>
        </div>
        <div className="cart">
          <img src="./cart.svg" alt="carrinho" />
          <span>{total}</span>
        </div>
      </section>
    </HeaderContainer>
  );
}
