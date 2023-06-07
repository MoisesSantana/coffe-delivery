import { HeaderContainer } from './header-styled';

export function Header() {
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
          <span>0</span>
        </div>
      </section>
    </HeaderContainer>
  );
}
