import { Box, styled } from '@mui/material';

export const FormCards = styled(Box)`
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
`;
