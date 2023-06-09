import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { CheckoutContainer } from './checkout-styled';
import { CartList } from './components/CartList';
import { Form } from './components/Form';

export function Checkout() {
  return (
    <CheckoutContainer py="4rem" mx="auto">
      <Form />
      <CartList />
    </CheckoutContainer>
  );
}
