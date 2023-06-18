import { ButtonGroup, Typography } from '@mui/material';
import { useContext } from 'react';
import { ButtonContainer } from '../../../../../styles/shared-styles';
import { RemoveButtonContainer } from '../cart-styled';
import { CoffeeWithQty } from '../../../../../types';
import { CoffeContext } from '../../../../../context/coffe-context';

interface CardProps {
  coffee: CoffeeWithQty;
}

export function Card({ coffee }: CardProps) {
  const { removeOfCard, handleQtyOfCoffee } = useContext(CoffeContext);

  return (
    <li key={coffee.name}>
      <img src={coffee.image} alt={coffee.name} />
      <div className="middle-info">
        <Typography variant="subtitle1" fontSize={16}>
          {coffee.name}
        </Typography>
        <div className="qty">
          <ButtonGroup>
            <ButtonContainer
              type="button"
              onClick={() => coffee.qty > 1 && handleQtyOfCoffee(coffee, -1)}
            >
              -
            </ButtonContainer>
            <ButtonContainer type="button">{coffee.qty}</ButtonContainer>
            <ButtonContainer
              type="button"
              onClick={() => handleQtyOfCoffee(coffee, 1)}
            >
              +
            </ButtonContainer>
          </ButtonGroup>
          <RemoveButtonContainer
            type="button"
            onClick={() => removeOfCard(coffee.id)}
          >
            <img src="/cart/trash.svg" alt="lixeira" />
            Remover
          </RemoveButtonContainer>
        </div>
      </div>
      <Typography variant="body1" fontWeight="bold" fontSize={16}>
        R${(coffee.qty * coffee.price).toFixed(2)}
      </Typography>
    </li>
  );
}
