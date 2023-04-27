import { Box, styled } from '@mui/material';

export const HeroContainer = styled(Box)`
  background-color: #fafafa;
  padding: 4rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
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

  .left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 588px;

    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .bullets {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      row-gap: 20px;
      column-gap: 40px;
    }
  }

  .right-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 875px) {
    .right-content {
      display: none;
    }
  }
`;
