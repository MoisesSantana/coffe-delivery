import { ButtonGroup, Typography } from '@mui/material';
import { CartContainer, CartProductList } from './cart-styled';
import {
  ButtonContainer,
  CheckoutCards,
} from '../../../../styles/shared-styles';

export function Cart() {
  return (
    <CartContainer>
      <Typography variant="h4">Cafés selecionados</Typography>
      <CheckoutCards p="2.5rem">
        <CartProductList>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
          <li>
            <img src="/coffes/coffe-arabe.svg" alt="" />
            <span>arabe</span>
            <ButtonGroup>
              <ButtonContainer>-</ButtonContainer>
              <ButtonContainer>1</ButtonContainer>
              <ButtonContainer>+</ButtonContainer>
            </ButtonGroup>
            <ButtonContainer>Remover</ButtonContainer>
            <span>R$00,00</span>
          </li>
        </CartProductList>
      </CheckoutCards>
    </CartContainer>
  );
}
