import { styled } from '@mui/material';

export const FormContainer = styled('form')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1360px) {
    width: 100%;
    flex-direction: column;
  }
`;
