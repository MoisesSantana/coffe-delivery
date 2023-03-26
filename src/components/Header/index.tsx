import Logo from '../../assets/images/logo.svg';
import Pin from '../../assets/images/pin.svg';
import Cart from '../../assets/images/cart.svg';
import { HeaderContainer } from './header-styled';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffe Delivery" />
      <section className="actions">
        <div className="location">
          <img src={Pin} alt="localização" />
          <span>Rio de Janeiro</span>
        </div>
        <div className="cart">
          <img src={Cart} alt="carrinho" />
        </div>
      </section>
    </HeaderContainer>
  );
}
