import { CheckoutContainer } from './checkout-styled';
import { Cart } from './components/Cart';
import { Form } from './components/Form';

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <Cart />
    </CheckoutContainer>
  );
}
