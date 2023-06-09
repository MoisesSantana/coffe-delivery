import { Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import {
  ButtonContainer,
  CartContainer,
  CartProductList,
  RowGroup,
} from './cart-styled';
import { CheckoutCards } from '../../../../styles/shared-styles';
import { Card } from './Card';
import { CoffeContext } from '../../../../context/coffe-context';

const DELIVERY_PRICE = 8;

export function CartList() {
  const { palette } = useTheme();
  const { cart } = useContext(CoffeContext);
  const total = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  return (
    <CartContainer>
      <Typography variant="h4">Cafés selecionados</Typography>
      <CheckoutCards p="2.5rem">
        <CartProductList>
          {cart.map((coffee) => (
            <Card key={coffee.name} coffee={coffee} />
          ))}
        </CartProductList>
        <RowGroup>
          <div>
            <Typography variant="body1" fontSize={14}>
              Total de itens
            </Typography>
            <Typography variant="body1" fontSize={16}>
              R${total.toFixed(2)}
            </Typography>
          </div>
          <div>
            <Typography variant="body1" fontSize={14}>
              Entrega
            </Typography>
            <Typography variant="body1" fontSize={16}>
              R${DELIVERY_PRICE.toFixed(2)}
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
              R${(DELIVERY_PRICE + total).toFixed(2)}
            </Typography>
          </div>
        </RowGroup>
        <ButtonContainer>Confirmar pedido</ButtonContainer>
      </CheckoutCards>
    </CartContainer>
  );
}
