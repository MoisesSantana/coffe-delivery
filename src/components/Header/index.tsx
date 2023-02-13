import Logo from '../../assets/logo.svg';
import Pin from '../../assets/pin.svg';
import Cart from '../../assets/cart.svg';

export function Header() {
  return (
    <header>
      <img src={Logo} alt="Coffe Delivery" />
      <section>
        <div>
          <img src={Pin} alt="localização" />
          <span>Rio de Janeiro</span>
        </div>
        <div>
          <img src={Cart} alt="carrinho" />
        </div>
      </section>
    </header>
  );
}
