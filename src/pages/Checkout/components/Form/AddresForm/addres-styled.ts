import { Box, styled } from '@mui/material';

export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  fieldset {
    border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }

  input {
    height: 1.5rem;
  }
`;
