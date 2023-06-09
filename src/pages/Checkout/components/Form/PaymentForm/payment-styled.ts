import { Box, Button, styled } from '@mui/material';

export const CardsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export const CardContainer = styled('label')`
  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: ${({ theme }) => theme.palette.grey[700]};
  font-size: 0.75rem;
  font-weight: normal;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  width: 11rem;
  padding: 1rem;
  gap: 6px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;
