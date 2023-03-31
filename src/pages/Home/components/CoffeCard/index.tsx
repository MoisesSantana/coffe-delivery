import { Stack } from '@mui/material';
import { useState } from 'react';
import {
  ButtonContainer,
  ButtonGroupContainer,
  CoffeCardContainer,
  FooterCardContainer,
  Tag,
} from './coffecard-styled';
import cartIconDisable from '../../../../assets/images/button-cart.svg';
import cartIconHover from '../../../../assets/images/button-cart-hover.svg';

interface CoffeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

export function CoffeCard({
  name,
  description,
  image,
  price,
  tags,
}: CoffeCardProps) {
  const [cartIcon, setCartIcon] = useState<string>(cartIconDisable);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (add: number): void => {
    if (quantity > 1 || add === 1) setQuantity((state) => state + add);
  };

  return (
    <CoffeCardContainer>
      <img src={image} alt={name} className="coffe-image" />
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
      <strong className="coffe-name">{name}</strong>
      <p className="description">{description}</p>
      <FooterCardContainer>
        <span className="price">{price.toFixed(2)}</span>

        <div className="manage-quantity">
          <ButtonGroupContainer>
            <ButtonContainer onClick={() => handleQuantity(-1)}>
              -
            </ButtonContainer>
            <ButtonContainer>{quantity}</ButtonContainer>
            <ButtonContainer onClick={() => handleQuantity(1)}>
              +
            </ButtonContainer>
          </ButtonGroupContainer>
          <img
            onMouseEnter={() => setCartIcon(cartIconHover)}
            onMouseOut={() => setCartIcon(cartIconDisable)}
            onBlur={() => setCartIcon(cartIconDisable)}
            className="cart"
            src={cartIcon}
            alt="carrinho"
          />
        </div>
      </FooterCardContainer>
    </CoffeCardContainer>
  );
}
