import { Box, styled } from '@mui/material';

export const CheckoutContainer = styled(Box)`
  display: flex;
  padding-top: 210px;
  justify-content: space-between;
  gap: 2rem;
  width: 60%;
  @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
    flex-direction: column;
  }
`;
