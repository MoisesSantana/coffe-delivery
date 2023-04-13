import { Box, styled } from '@mui/material';

export const PaymentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #f3f2f2;
  border-radius: 6px;
  margin-top: 12px;

  header {
    display: flex;
    align-items: flex-start;

    .header-texting {
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: #403937;
      margin-left: 6px;

      small {
        font-size: 14px;
        color: #574f4d;
      }
    }
  }
`;

export const CardsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 16px;
`;
