import { Box, styled } from '@mui/material';

export const FormCards = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  border-radius: 6px;
`;
