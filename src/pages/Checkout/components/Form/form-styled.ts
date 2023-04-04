import { styled } from '@mui/material';

export const FormContainer = styled('form')`
  background-color: #fafafa;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
  } */

  .form-title {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 18px;
    color: #403937;
  }
`;
