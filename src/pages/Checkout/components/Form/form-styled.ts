import { styled } from '@mui/material';

export const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1360px) {
    width: 100%;
    flex-direction: column;
  }
`;
