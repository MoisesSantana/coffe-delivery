import { Box, Button, styled } from '@mui/material';

export const CardsContainer = styled(Box)`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
`;

export const CardContainer = styled(Button)`
  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: ${({ theme }) => theme.palette.grey[700]};
  font-size: 0.75rem;
  font-weight: normal;
  justify-content: flex-start;
  height: 3rem;
  width: 11rem;
  padding: 1rem;
  gap: 6px;
  border-radius: 6px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;
