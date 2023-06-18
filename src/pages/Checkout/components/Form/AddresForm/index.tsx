import { Grid, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { InputsContainer } from './addres-styled';

import { CheckoutCards } from '../../../../../styles/shared-styles';

const LABEL_PROPS = {
  style: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    color: '#8D8686',
  },
};

const INPUT_PROPS = {
  style: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    color: '#574F4D',
  },
};

export function AddressForm() {
  const { register, formState } = useFormContext();

  return (
    <CheckoutCards p="2.5rem">
      <header>
        <img src="./cart/pin.svg" alt="pin" />
        <div>
          <Typography variant="subtitle1" fontSize={16}>
            Endereço de Entrega
          </Typography>
          <Typography variant="body1" fontSize={14}>
            Informe o endereço onde deseja receber seu pedido
          </Typography>
        </div>
      </header>
      <InputsContainer mt="2rem" gap="1rem">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <InputMask mask="99999-999" maskChar={null} {...register('cep')}>
              {() => (
                <TextField
                  label="CEP"
                  type="text"
                  variant="outlined"
                  size="small"
                  color={formState.errors.cep ? 'warning' : 'secondary'}
                  InputLabelProps={LABEL_PROPS}
                  inputProps={INPUT_PROPS}
                  {...register('cep')}
                />
              )}
            </InputMask>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Rua"
              variant="outlined"
              fullWidth
              size="small"
              color={formState.errors.street ? 'warning' : 'secondary'}
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
              {...register('street')}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Número"
              variant="outlined"
              color={formState.errors.number ? 'warning' : 'secondary'}
              type="number"
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
              {...register('number', { valueAsNumber: true })}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Complemento"
              variant="outlined"
              color="secondary"
              size="small"
              fullWidth
              InputLabelProps={LABEL_PROPS}
              InputProps={{
                endAdornment: (
                  <Typography variant="caption">opicional</Typography>
                ),
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={INPUT_PROPS}
              {...register('complement')}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Bairro"
              variant="outlined"
              color={formState.errors.neighborhood ? 'warning' : 'secondary'}
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
              {...register('neighborhood')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Cidade"
              fullWidth
              variant="outlined"
              color={formState.errors.city ? 'warning' : 'secondary'}
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
              {...register('city')}
            />
          </Grid>
          <Grid item xs={2}>
            <InputMask
              mask="AA"
              maskChar=""
              formatChars={{ A: '[A-Za-z]' }}
              {...register('uf')}
            >
              {() => (
                <TextField
                  label="UF"
                  variant="outlined"
                  color={formState.errors.uf ? 'warning' : 'secondary'}
                  size="small"
                  InputLabelProps={LABEL_PROPS}
                  inputProps={INPUT_PROPS}
                  {...register('uf')}
                />
              )}
            </InputMask>
          </Grid>
        </Grid>
      </InputsContainer>
    </CheckoutCards>
  );
}
