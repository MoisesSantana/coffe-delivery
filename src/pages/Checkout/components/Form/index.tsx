import { AddressForm } from './AddresForm';
import { FormContainer } from './form-styled';
import { PaymentForm } from './PaymentForm';

export function Form() {
  return (
    <FormContainer>
      <h3 className="form-title">Complete seu pedido</h3>
      <AddressForm />
      <PaymentForm />
    </FormContainer>
  );
}
