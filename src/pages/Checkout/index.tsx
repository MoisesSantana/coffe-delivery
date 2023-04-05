import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { CheckoutContainer } from './checkout-styled';
import { Cart } from './components/Cart';
import { Form } from './components/Form';

export function Checkout() {
  const isMobile = useIsMobile();
  const theme = useTheme();

  useEffect(() => {
    console.log('isMobile', isMobile);
    console.log('theme', theme);
  }, [isMobile, theme]);

  return (
    <CheckoutContainer>
      <Form />
      <Cart />
    </CheckoutContainer>
  );
}
