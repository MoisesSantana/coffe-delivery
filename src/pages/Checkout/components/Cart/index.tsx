import { ButtonGroup, Typography } from '@mui/material';
import {
  CartContainer,
  CartProductList,
  RemoveButtonContainer,
} from './cart-styled';
import {
  ButtonContainer,
  CheckoutCards,
} from '../../../../styles/shared-styles';
import { cards } from '../../../../data';

export function Cart() {
  return (
    <CartContainer>
      <Typography variant="h4">Cafés selecionados</Typography>
      <CheckoutCards p="2.5rem">
        <CartProductList>
          {cards.map((coffee) => (
            <li key={coffee.name}>
              <img src={coffee.image} alt={coffee.name} />
              <div className="teste">
                <Typography variant="subtitle1" fontSize={16}>
                  {coffee.name}
                </Typography>
                <div className="teste2">
                  <ButtonGroup>
                    <ButtonContainer>-</ButtonContainer>
                    <ButtonContainer>1</ButtonContainer>
                    <ButtonContainer>+</ButtonContainer>
                  </ButtonGroup>
                  <RemoveButtonContainer>
                    <img src="/cart/trash.svg" alt="lixeira" />
                    Remover
                  </RemoveButtonContainer>
                </div>
              </div>
              <Typography variant="body1" fontWeight="bold" fontSize={16}>
                R$00,00
              </Typography>
            </li>
          ))}
        </CartProductList>
      </CheckoutCards>
    </CartContainer>
  );
}
