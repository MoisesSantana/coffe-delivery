import { ButtonGroup, Stack, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import {
  CoffeeCardContainer,
  FooterCardContainer,
  Tag,
} from './coffeecard-styled';
import { ButtonContainer } from '../../../../../styles/shared-styles';
import { CoffeContext } from '../../../../../context/coffe-context';

interface CoffeeCardProps {
  coffee: {
    name: string;
    description: string;
    image: string;
    price: number;
    tags: string[];
    id: number;
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [cartIcon, setCartIcon] = useState<string>('/home/button-cart.svg');
  const [quantity, setQuantity] = useState<number>(1);
  const { addInCart } = useContext(CoffeContext);

  const handleQuantity = (add: number): void => {
    if (quantity > 1 || add === 1) setQuantity((state) => state + add);
  };

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.name} className="coffee-image" />
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        justifyContent="center"
      >
        {coffee.tags.map((tag) => (
          <Tag key={`${coffee.name}-${tag}`} label={tag} />
        ))}
      </Stack>
      <Typography variant="h3">{coffee.name}</Typography>
      <Typography
        variant="body2"
        align="center"
        fontSize={14}
        sx={{
          px: '20px',
        }}
      >
        {coffee.description}
      </Typography>
      <FooterCardContainer>
        <span className="price">{coffee.price.toFixed(2)}</span>

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
          <button
            className="cart-btn"
            onClick={() => addInCart(coffee, quantity)}
          >
            <img
              onMouseEnter={() => setCartIcon('/home/button-cart-hover.svg')}
              onMouseOut={() => setCartIcon('/home/button-cart.svg')}
              onBlur={() => setCartIcon('/home/button-cart-hover.svg')}
              className="cart"
              src={cartIcon}
              alt="carrinho"
            />
          </button>
        </div>
      </FooterCardContainer>
    </CoffeeCardContainer>
  );
}
