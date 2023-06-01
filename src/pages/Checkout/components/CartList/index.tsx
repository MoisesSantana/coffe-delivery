import { Typography, useTheme } from '@mui/material';
import {
  ButtonContainer,
  CartContainer,
  CartProductList,
  RowGroup,
} from './cart-styled';
import { CheckoutCards } from '../../../../styles/shared-styles';
import { cards } from '../../../../data';
import { Card } from './Card';

export function CartList() {
  const { palette } = useTheme();
  console.log(palette);
  return (
    <CartContainer>
      <Typography variant="h4">Cafés selecionados</Typography>
      <CheckoutCards p="2.5rem">
        <CartProductList>
          {cards.map((coffee) => (
            <Card key={coffee.name} {...coffee} />
          ))}
        </CartProductList>
        <RowGroup>
          <div>
            <Typography variant="body1" fontSize={14}>
              Total de itens
            </Typography>
            <Typography variant="body1" fontSize={16}>
              R$20,70
            </Typography>
          </div>
          <div>
            <Typography variant="body1" fontSize={14}>
              Entrega
            </Typography>
            <Typography variant="body1" fontSize={16}>
              R$8,00
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color={palette.grey['800']}
            >
              Total
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color={palette.grey['800']}
            >
              R$28,70
            </Typography>
          </div>
        </RowGroup>
        <ButtonContainer>Confirmar pedido</ButtonContainer>
      </CheckoutCards>
    </CartContainer>
  );
}
