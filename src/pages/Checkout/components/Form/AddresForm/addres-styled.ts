import { Box, styled } from '@mui/material';

export const AddresContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: blue;

  header {
    display: flex;
    align-items: flex-start;

    .header-texting {
      display: flex;
      flex-direction: column;
    }
  }
`;
