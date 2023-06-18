import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutContainer } from './checkout-styled';
import { CartList } from './components/CartList';
import { Form } from './components/Form';

const FORM_VALIDATION_SCHEMA = zod.object({
  cep: zod
    .string()
    .min(9, 'O CEP deve conter exatamente 8 dígitos')
    .max(9, 'O CEP deve conter exatamente 8 dígitos'),
  street: zod.string().min(1),
  number: zod.number(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod
    .string()
    .regex(/^[A-Za-z]+$/)
    .min(2)
    .max(2),
  paymentMethod: zod.string(),
  complement: zod.string().optional(),
});

export type OrderFormData = zod.infer<typeof FORM_VALIDATION_SCHEMA>;

export function Checkout() {
  const paymentForm = useForm<OrderFormData>({
    resolver: zodResolver(FORM_VALIDATION_SCHEMA),
  });

  return (
    <CheckoutContainer py="4rem" mx="auto">
      <FormProvider {...paymentForm}>
        <Form />
        <CartList />
      </FormProvider>
    </CheckoutContainer>
  );
}
