import { Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { CardContainer, CardsContainer } from './payment-styled';
import { CheckoutCards } from '../../../../../styles/shared-styles';
import { CoffeContext } from '../../../../../context/coffe-context';

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
  const { register } = useContext(CoffeContext);
  const { palette } = useTheme();
  return (
    <CheckoutCards p="2.5rem">
      <header>
        <img src="./cart/dolar.svg" alt="pin" />
        <div>
          <Typography variant="body1" fontSize={16} color={palette.grey[800]}>
            Pagamento
          </Typography>
          <Typography variant="body1" fontSize={14}>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Typography>
        </div>
      </header>
      <CardsContainer mt="2rem" gap="1rem">
        {cards.map((card) => (
          <div key={card.id}>
            <input
              type="radio"
              id={`method${card.id}`}
              {...register('paymentMethod')}
            />
            <CardContainer htmlFor={`method${card.id}`}>
              <img src={card.image} alt={card.text} />
              <span>{card.text}</span>
            </CardContainer>
          </div>
        ))}
      </CardsContainer>
    </CheckoutCards>
  );
}
