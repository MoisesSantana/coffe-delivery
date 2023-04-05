import { useTheme } from '@mui/material';
import useIsMobile from '../../hooks/useIsMobile';
import { CheckoutContainer } from './checkout-styled';
import { Cart } from './components/Cart';
import { Form } from './components/Form';

export function Checkout() {
  const isMobile = useIsMobile();
  const theme = useTheme();

  console.log('isMobile', isMobile);
  console.log('theme', theme);

  return (
    <CheckoutContainer>
      <Form />
      <Cart />
    </CheckoutContainer>
  );
}
