import { Box, styled } from '@mui/material';

export const HomeContainer = styled(Box)`
  padding-top: 105px;
  width: 60%;
  margin: auto;
  @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
  }
`;
