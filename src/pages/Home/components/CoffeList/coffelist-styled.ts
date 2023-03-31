import { Box, styled } from '@mui/material';

export const CoffeListContainer = styled(Box)`
  background-color: #fafafa;
  padding: 4rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 800;
    font-size: 32px;
    color: #403937;
  }
`;
