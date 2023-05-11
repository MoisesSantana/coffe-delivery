import { Box, styled } from '@mui/material';

export const CardsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

export const CardContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[400]};
`;
