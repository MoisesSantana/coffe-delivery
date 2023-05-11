import { Box, styled } from '@mui/material';

export const HeroContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  .left-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 588px;

    .bullets {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      column-gap: 40px;
    }
  }

  @media (max-width: 875px) {
    .right-content {
      display: none;
    }
  }
`;
