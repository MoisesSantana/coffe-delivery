import { ButtonGroup, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import {
  CoffeeCardContainer,
  FooterCardContainer,
  Tag,
} from './coffeecard-styled';
import { ButtonContainer } from '../../../../../styles/shared-styles';

interface CoffeeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({
  name,
  description,
  image,
  price,
  tags,
}: CoffeeCardProps) {
  const [cartIcon, setCartIcon] = useState<string>('./home/button-cart.svg');
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (add: number): void => {
    if (quantity > 1 || add === 1) setQuantity((state) => state + add);
  };

  return (
    <CoffeeCardContainer>
      <img src={image} alt={name} className="coffee-image" />
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        justifyContent="center"
      >
        {tags.map((tag) => (
          <Tag key={`${name}-${tag}`} label={tag} />
        ))}
      </Stack>
      <Typography variant="h3">{name}</Typography>
      <Typography
        variant="body2"
        align="center"
        fontSize={14}
        sx={{
          px: '20px',
        }}
      >
        {description}
      </Typography>
      <FooterCardContainer>
        <span className="price">{price.toFixed(2)}</span>

        <div className="manage-quantity">
          <ButtonGroup>
            <ButtonContainer onClick={() => handleQuantity(-1)}>
              -
            </ButtonContainer>
            <ButtonContainer>{quantity}</ButtonContainer>
            <ButtonContainer onClick={() => handleQuantity(1)}>
              +
            </ButtonContainer>
          </ButtonGroup>
          <img
            onMouseEnter={() => setCartIcon('./home/button-cart.svg')}
            onMouseOut={() => setCartIcon('./home/button-cart.svg')}
            onBlur={() => setCartIcon('./home/button-cart.svg')}
            className="cart"
            src={cartIcon}
            alt="carrinho"
          />
        </div>
      </FooterCardContainer>
    </CoffeeCardContainer>
  );
}
