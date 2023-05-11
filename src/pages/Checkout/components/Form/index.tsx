import { Typography } from '@mui/material';
import { AddressForm } from './AddresForm';
import { FormContainer } from './form-styled';
import { PaymentForm } from './PaymentForm';

export function Form() {
  return (
    <FormContainer>
      <Typography variant="h4">Complete seu pedido</Typography>
      <AddressForm />
      <PaymentForm />
    </FormContainer>
  );
}
