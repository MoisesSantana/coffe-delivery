import { ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { ButtonContainer } from '../../../../../styles/shared-styles';
import { RemoveButtonContainer } from '../cart-styled';

interface CardProps {
  name: string;
  image: string;
  price: number;
}

export function Card({ name, image, price }: CardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (add: number): void => {
    if (quantity > 1 || add === 1) setQuantity((state) => state + add);
  };

  return (
    <li key={name}>
      <img src={image} alt={name} />
      <div className="middle-info">
        <Typography variant="subtitle1" fontSize={16}>
          {name}
        </Typography>
        <div className="qty">
          <ButtonGroup>
            <ButtonContainer onClick={() => handleQuantity(-1)}>
              -
            </ButtonContainer>
            <ButtonContainer>{quantity}</ButtonContainer>
            <ButtonContainer onClick={() => handleQuantity(1)}>
              +
            </ButtonContainer>
          </ButtonGroup>
          <RemoveButtonContainer>
            <img src="/cart/trash.svg" alt="lixeira" />
            Remover
          </RemoveButtonContainer>
        </div>
      </div>
      <Typography variant="body1" fontWeight="bold" fontSize={16}>
        R${price.toFixed(2)}
      </Typography>
    </li>
  );
}
