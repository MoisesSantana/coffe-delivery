import { Box, styled } from '@mui/material';

export const HeroContainer = styled(Box)`
  background-color: #fafafa;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

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

      h1 {
        color: '#272221';
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
        font-weight: 800;
        font-size: 48px;
        margin-top: 0;
        margin-bottom: 16px;
      }

      h2 {
        color: '#403937';
        font-family: 'Roboto', sans-serif;
        line-height: 130%;
        font-weight: 300;
        font-size: 20px;
      }
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
`;
