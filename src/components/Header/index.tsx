import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer } from './header-styled';
import { CoffeContext } from '../../context/coffe-context';
import { CoffeeWithQty } from '../../types';

export function Header() {
  const { cart } = useContext(CoffeContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc: number, curr: CoffeeWithQty) => acc + curr.qty,
    0
  );

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="e Delivery" />
      </Link>
      <section className="actions">
        <div className="location">
          <img src="/pin.svg" alt="localização" />
          <span>Rio de Janeiro</span>
        </div>
        <button className="cart" onClick={() => navigate('checkout')}>
          <img src="/cart.svg" alt="carrinho" />
          <span>{total}</span>
        </button>
      </section>
    </HeaderContainer>
  );
}
