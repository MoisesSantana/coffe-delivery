import { CardsContainer, PaymentContainer } from './payment-styled';
import dolar from '../../../../../assets/images/cart/dolar.svg';
import credit from '../../../../../assets/images/cart/cards/credit-card.svg';
import debit from '../../../../../assets/images/cart/cards/debit-cart.svg';
import money from '../../../../../assets/images/cart/cards/money.svg';

export function PaymentForm() {
  const cards = [
    {
      id: 0,
      text: 'Cartão de crédito',
      image: credit,
    },
    {
      id: 1,
      text: 'Cartão de débito',
      image: debit,
    },
    {
      id: 2,
      text: 'Dinheiro',
      image: money,
    },
  ];

  return (
    <PaymentContainer>
      <header>
        <img src={dolar} alt="pin" />
        <div className="header-texting">
          <span>Endereço de Entrega</span>
          <small>Informe o endereço onde deseja receber seu pedido</small>
        </div>
      </header>
      <CardsContainer>
        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.image} alt={card.text} />
            <span>{card.text}</span>
          </div>
        ))}
      </CardsContainer>
    </PaymentContainer>
  );
}
