import { CardsContainer, PaymentContainer } from './payment-styled';

export function PaymentForm() {
  const cards = [
    {
      id: 0,
      text: 'Cartão de crédito',
      image: './cards/credit-card.svg',
    },
    {
      id: 1,
      text: 'Cartão de débito',
      image: './cards/debit-cart.svg',
    },
    {
      id: 2,
      text: 'Dinheiro',
      image: './cards/money.svg',
    },
  ];

  return (
    <PaymentContainer>
      <header>
        <img src="./cart/dolar.svg" alt="pin" />
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
