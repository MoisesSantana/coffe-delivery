import { styled } from '@mui/material';
import { CheckoutCards } from '../../../../styles/shared-styles';

export const CartContainer = styled('aside')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: space-between; */
  /* @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
  } */
`;

export const CartProductList = styled('ul')`
  list-style: none;
  overflow-y: auto;
  height: 20rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  li {
    width: 368px;
    padding: 40px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};

    &:first-child {
      padding-top: 0;
    }
  }
`;

export const Fodase = styled('div')`
  width: 368px;
  padding: 40px 0;
  background-color: red;
`;
