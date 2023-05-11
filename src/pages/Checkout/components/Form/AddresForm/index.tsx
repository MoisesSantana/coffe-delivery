import { Grid, TextField, Typography } from '@mui/material';
import { InputsContainer } from './addres-styled';
import { FormCards } from '../../../../../styles/shared-styles';

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
  return (
    <FormCards p="2.5rem">
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
            <TextField
              label="CEP"
              type="text"
              variant="outlined"
              size="small"
              color="secondary"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Rua"
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Número"
              variant="outlined"
              color="secondary"
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
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
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Bairro"
              variant="outlined"
              color="secondary"
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Cidade"
              fullWidth
              variant="outlined"
              color="secondary"
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="UF"
              variant="outlined"
              color="secondary"
              size="small"
              InputLabelProps={LABEL_PROPS}
              inputProps={INPUT_PROPS}
            />
          </Grid>
        </Grid>
      </InputsContainer>
    </FormCards>
  );
}
