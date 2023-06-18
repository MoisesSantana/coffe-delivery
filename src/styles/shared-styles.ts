import { Box, Button, styled } from '@mui/material';

export const CheckoutCards = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }

  form {
    width: 100%;
  }
`;

export const ButtonContainer = styled(Button)`
  border: none;
  max-width: 10px !important;
  min-width: 10px !important;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: ${({ theme }) => theme.palette.secondary.main};
  transition: 300ms ease-in-out;

  &:hover {
    border: none;
    color: ${({ theme }) => theme.palette.secondary.dark};
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.palette.grey[900]};
    cursor: auto;
    font-size: 1rem;
    transition: 300ms ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[400]};
      color: ${({ theme }) => theme.palette.grey[900]};
    }
  }
`;
