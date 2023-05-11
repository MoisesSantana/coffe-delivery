import { Typography, useTheme } from '@mui/material';
import { CardContainer, CardsContainer } from './payment-styled';
import { FormCards } from '../../../../../styles/shared-styles';

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

  const { palette } = useTheme();
  return (
    <FormCards p="2.5rem">
      <header>
        <img src="./cart/dolar.svg" alt="pin" />
        <div>
          <Typography variant="body1" fontSize={16} color={palette.grey[800]}>
            Endereço de Entrega
          </Typography>
          <Typography variant="body1" fontSize={14}>
            Informe o endereço onde deseja receber seu pedido
          </Typography>
        </div>
      </header>
      <CardsContainer mt="2rem" gap="1rem">
        {cards.map((card) => (
          <CardContainer key={card.id}>
            <img src={card.image} alt={card.text} />
            <span>{card.text}</span>
          </CardContainer>
        ))}
      </CardsContainer>
    </FormCards>
  );
}
